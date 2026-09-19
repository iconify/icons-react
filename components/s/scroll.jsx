import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f47guxbkf.css';
import '../../css/x/xo5a4vmtr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f47guxbkf"/><path class="xo5a4vmtr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:scroll",
	});
}

export default Component;
