import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rmc1u9j4i.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/y/yg_stwb0g.css';
import '../../css/c/c0piegl7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rmc1u9j4i"/><path class="om4lnzbpu"/><path class="yg_stwb0g"/><path class="c0piegl7f"/></g>`,
		"fallback": "solar:password-minimalistic-input-linear",
	});
}

export default Component;
