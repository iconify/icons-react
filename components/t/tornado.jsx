import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/k/klz60wbnu.css';
import '../../css/w/wzaq7_s-b.css';
import '../../css/r/r-e-rpb_r.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGeTk5wb9U" cx="7.34" cy="3.15" r="19.32" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="klz60wbnu wm-a"/><path fill="url(#SVGeTk5wb9U)" class="wm-k wzaq7_s-b"/><path class="r-e-rpb_r wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:tornado",
	});
}

export default Component;
