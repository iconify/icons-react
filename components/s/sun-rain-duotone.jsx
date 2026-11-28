import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejtxv9bxx.css';
import '../../css/a/ald725bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejtxv9bxx secondary"/><path class="ald725bln primary"/></g>`,
		"fallback": "iconaut:sun-rain-duotone",
	});
}

export default Component;
