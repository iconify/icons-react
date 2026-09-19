import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuhv342ea.css';
import '../../css/u/ugb4s0prv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cuhv342ea"/><path class="ugb4s0prv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:magnifying-glass-tilted-right",
	});
}

export default Component;
