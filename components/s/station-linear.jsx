import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zoc5be9an.css';
import '../../css/w/wve1fibba.css';
import '../../css/u/um_27sbup.css';
import '../../css/e/e_c-iubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zoc5be9an"/><path class="wve1fibba"/><circle class="um_27sbup"/><path class="e_c-iubxf"/></g>`,
		"fallback": "solar:station-linear",
	});
}

export default Component;
