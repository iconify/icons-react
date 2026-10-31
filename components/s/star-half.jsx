import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/ixb849bwi.css';
import '../../css/c/czur5fbap.css';
import '../../css/g/g6_e51wkr.css';
import '../../css/s/sz7-zsoth.css';
import '../../css/d/d-8rgjxpg.css';
import '../../css/i/i0itsu56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGC1ZEgraQ" cx="7.38" cy="8.04" r="24.83" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ixb849bwi wm-shadow"/><path fill="url(#SVGC1ZEgraQ)" class="czur5fbap wm-k"/><path fill="url(#SVGDCUexbkg)" class="g6_e51wkr wm-a"/><path class="sz7-zsoth wm-shine"/><path class="d-8rgjxpg wm-deco"/><path class="i0itsu56j wm-deco"/></g>`,
		"fallback": "withicons-rangoli:star-half",
	});
}

export default Component;
