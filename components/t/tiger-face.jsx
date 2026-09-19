import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akbgzkbdc.css';
import '../../css/x/xk2dit6mo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akbgzkbdc"/><path class="xk2dit6mo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tiger-face",
	});
}

export default Component;
