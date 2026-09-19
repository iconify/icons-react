import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfnd5vl1q.css';
import '../../css/t/t78n36boy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sfnd5vl1q"/><path class="t78n36boy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:nesting-dolls",
	});
}

export default Component;
