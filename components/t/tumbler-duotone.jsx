import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/giodqit_k.css';
import '../../css/n/nqwo123ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="giodqit_k secondary"/><path class="nqwo123ng primary"/></g>`,
		"fallback": "iconaut:tumbler-duotone",
	});
}

export default Component;
