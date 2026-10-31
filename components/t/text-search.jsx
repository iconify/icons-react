import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/e/echu76bdk.css';
import '../../css/i/iyb7qznuo.css';
import '../../css/m/mp409urbg.css';
import '../../css/l/l_inx91hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG78LWuXwm" cx="7.64" cy="7.64" r="21.72" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="echu76bdk wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="iyb7qznuo wm-a"/><path fill="url(#SVG78LWuXwm)" class="mp409urbg wm-k"/><path class="l_inx91hn wm-shine"/></g>`,
		"fallback": "withicons-rangoli:text-search",
	});
}

export default Component;
