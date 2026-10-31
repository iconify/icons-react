import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/lokyeeidg.css';
import '../../css/l/lbw8yoh7h.css';
import '../../css/e/ehy1t-b8i.css';
import '../../css/n/nmpd1lb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG696GBdDo" cx="4.28" cy="6.74" r="18.32" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="lokyeeidg wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="lbw8yoh7h wm-a"/><path fill="url(#SVG696GBdDo)" class="ehy1t-b8i wm-k"/><path class="nmpd1lb3e wm-shine"/></g>`,
		"fallback": "withicons-rangoli:layout-list",
	});
}

export default Component;
