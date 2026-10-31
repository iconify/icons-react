import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/d/dgqaem_-i.css';
import '../../css/v/v1r-eyyvv.css';
import '../../css/y/y91kmw3bx.css';
import '../../css/y/ybd_r9j1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGV2C3gvuI" cx="9.62" cy="8.98" r="13.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="dgqaem_-i wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="v1r-eyyvv wm-a"/><path fill="url(#SVGV2C3gvuI)" class="wm-k y91kmw3bx"/><path class="wm-shine ybd_r9j1g"/></g>`,
		"fallback": "withicons-rangoli:sun",
	});
}

export default Component;
