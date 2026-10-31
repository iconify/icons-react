import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/m/m0c3npbyy.css';
import '../../css/r/rqcjs844m.css';
import '../../css/j/j881dtiua.css';
import '../../css/i/ik2a_50ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGXkCfKOgS" cx="7.2" cy="8.7" r="22.31" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="m0c3npbyy wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="rqcjs844m wm-a"/><path fill="url(#SVGXkCfKOgS)" class="j881dtiua wm-k"/><path class="ik2a_50ve wm-shine"/></g>`,
		"fallback": "withicons-rangoli:text-cursor-input",
	});
}

export default Component;
