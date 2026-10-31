import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/j7a5nmjzq.css';
import '../../css/q/q9axlq_ls.css';
import '../../css/g/g34flrb0v.css';
import '../../css/z/z3s5hpb_z.css';
import '../../css/z/zvxr49b6j.css';
import '../../css/l/lzs83db-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrG7AQeLE" cx="7.2" cy="6.07" r="26.81" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="j7a5nmjzq wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="q9axlq_ls wm-a"/><path fill="url(#SVGrG7AQeLE)" class="g34flrb0v wm-k"/><path class="wm-shine z3s5hpb_z"/><path class="wm-deco zvxr49b6j"/><path class="lzs83db-f wm-deco"/></g>`,
		"fallback": "withicons-rangoli:network",
	});
}

export default Component;
