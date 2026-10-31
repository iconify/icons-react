import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/a/a8hpdpo0j.css';
import '../../css/z/zj6mj6b9e.css';
import '../../css/k/kfkdbq6fq.css';
import '../../css/j/ji1143b7y.css';
import '../../css/c/cyw_-h7cr.css';
import '../../css/q/qmfhm82ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGZRLalj6V" cx="7.65" cy="5.64" r="23.56" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="a8hpdpo0j wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a zj6mj6b9e"/><path fill="url(#SVGZRLalj6V)" class="kfkdbq6fq wm-k"/><path class="ji1143b7y wm-shine"/><path class="cyw_-h7cr wm-deco"/><path class="qmfhm82ih wm-deco"/></g>`,
		"fallback": "withicons-rangoli:plane-takeoff",
	});
}

export default Component;
