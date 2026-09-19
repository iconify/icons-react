import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itt5wrbxw.css';
import '../../css/a/aaxopzb7v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="itt5wrbxw"/><path class="aaxopzb7v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:timer-clock",
	});
}

export default Component;
