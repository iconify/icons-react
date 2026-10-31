import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/u1qcgnbtw.css';
import '../../css/r/ro7004e9e.css';
import '../../css/l/l5jx0xbms.css';
import '../../css/t/tssix7bbh.css';
import '../../css/g/g2nbjibct.css';
import '../../css/v/vse68vq0j.css';
import '../../css/h/hdb5s330z.css';
import '../../css/y/yodhbw0qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUtz0wbXS" x1="11" x2="15" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="u1qcgnbtw wm-k"/><path class="ro7004e9e wm-a"/><path class="l5jx0xbms wm-deco"/><path fill="url(#SVGUtz0wbXS)" class="tssix7bbh wm-k"/><path class="g2nbjibct wm-a"/><path class="vse68vq0j wm-shadow"/><path class="hdb5s330z wm-shine"/><path class="wm-shine yodhbw0qy"/></g>`,
		"fallback": "withicons-valentine:stocking",
	});
}

export default Component;
