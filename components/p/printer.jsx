import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/jm6z0pbnx.css';
import '../../css/w/wd51bqlsq.css';
import '../../css/j/jn-nuia4i.css';
import '../../css/y/ysf1pvbwl.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/d/dzw-occnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG4GhH1d5B" cx="7.42" cy="9.59" r="21.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="jm6z0pbnx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wd51bqlsq wm-a"/><path fill="url(#SVG4GhH1d5B)" class="jn-nuia4i wm-k"/><path class="wm-shine ysf1pvbwl"/><path class="gyytzlc5m wm-deco"/><path class="dzw-occnn wm-deco"/></g>`,
		"fallback": "withicons-rangoli:printer",
	});
}

export default Component;
