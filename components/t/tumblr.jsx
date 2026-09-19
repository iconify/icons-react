import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q12e4xb1q.css';
import '../../css/u/uq5hfgb8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q12e4xb1q"/><path class="uq5hfgb8h"/></g>`,
		"fallback": "et:tumblr",
	});
}

export default Component;
