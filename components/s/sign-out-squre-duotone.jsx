import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzfu32vhp.css';
import '../../css/m/m162ywbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzfu32vhp"/><path class="m162ywbyo"/></g>`,
		"fallback": "lets-icons:sign-out-squre-duotone",
	});
}

export default Component;
