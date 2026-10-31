import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/x/x62docbyu.css';
import '../../css/z/z8j4edb5a.css';
import '../../css/h/hhw386fpv.css';
import '../../css/r/r_r8dnbwd.css';
import '../../css/k/koe1mhvly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG8wRYDeHR" cx="7.42" cy="6.83" r="24.41" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow x62docbyu"/><path fill="url(#SVGDCUexbkg)" class="wm-a z8j4edb5a"/><path fill="url(#SVG8wRYDeHR)" class="hhw386fpv wm-k"/><path fill="url(#SVGDCUexbkg)" class="r_r8dnbwd wm-a"/><path class="koe1mhvly wm-shine"/></g>`,
		"fallback": "withicons-rangoli:toran",
	});
}

export default Component;
