import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/b/baj9kg0iu.css';
import '../../css/f/fr9rh7v2v.css';
import '../../css/s/slwqsvbqx.css';
import '../../css/p/p5_fnhb_k.css';
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
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGajmNQcse" cx="8.3" cy="8.59" r="18.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="baj9kg0iu wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="fr9rh7v2v wm-a"/><path fill="url(#SVGajmNQcse)" class="slwqsvbqx wm-k"/><path class="p5_fnhb_k wm-shine"/><path class="r-e-rpb_r wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:plug",
	});
}

export default Component;
