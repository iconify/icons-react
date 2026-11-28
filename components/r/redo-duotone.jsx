import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qcda17wiv.css';
import '../../css/p/pxw401boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qcda17wiv secondary"/><path class="primary pxw401boj"/></g>`,
		"fallback": "iconaut:redo-duotone",
	});
}

export default Component;
