import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/y/y9n5q14mx.css';
import '../../css/a/aonz5sd7n.css';
import '../../css/w/wlng7gb4y.css';
import '../../css/j/j8_3oi4ow.css';
import '../../css/h/he_3a0bnc.css';
import '../../css/g/gddf0_bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6MPnAbsz" cx="4.71" cy="17.49" r="4.58" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow y9n5q14mx"/><path fill="url(#SVGDCUexbkg)" class="aonz5sd7n wm-a"/><path fill="url(#SVG6MPnAbsz)" class="wlng7gb4y wm-k"/><path class="j8_3oi4ow wm-deco"/><path fill="url(#SVGDCUexbkg)" class="he_3a0bnc wm-deco"/><path class="gddf0_bxg wm-deco"/></g>`,
		"fallback": "withicons-rangoli:rss",
	});
}

export default Component;
