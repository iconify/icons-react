import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/v/v6p5qq6ab.css';
import '../../css/y/ymxak0j2r.css';
import '../../css/t/tn9tl_bug.css';
import '../../css/p/p-v-6bc3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG463SSbBT" cx="7.2" cy="8.69" r="21.86" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="v6p5qq6ab wm-a"/><path fill="url(#SVG463SSbBT)" class="wm-k ymxak0j2r"/><path class="tn9tl_bug wm-deco"/><path class="p-v-6bc3q wm-deco"/></g>`,
		"fallback": "withicons-rangoli:trending-up",
	});
}

export default Component;
