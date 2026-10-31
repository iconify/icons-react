import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/h/hg1z4g2sl.css';
import '../../css/w/w39_j_bho.css';
import '../../css/o/oa9qlubyp.css';
import '../../css/h/h8izycbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="hg1z4g2sl wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="w39_j_bho wm-a"/><path fill="url(#SVGU00zieBw)" class="oa9qlubyp wm-k"/><path class="h8izycbfq wm-shine"/></g>`,
		"fallback": "withicons-rangoli:scan-eye",
	});
}

export default Component;
