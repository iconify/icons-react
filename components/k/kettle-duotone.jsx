import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q951h8b1z.css';
import '../../css/h/hkqi3cc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q951h8b1z secondary"/><path class="hkqi3cc6u primary"/></g>`,
		"fallback": "iconaut:kettle-duotone",
	});
}

export default Component;
