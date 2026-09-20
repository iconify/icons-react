import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h8gm2tbay.css';
import '../../css/h/hsch2jdsj.css';
import '../../css/e/ekf_vhhra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h8gm2tbay"/><path class="hsch2jdsj"/><path class="ekf_vhhra"/></g>`,
		"fallback": "solar:link-minimalistic-2-linear",
	});
}

export default Component;
