import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ie7zch5au.css';
import '../../css/v/vw5u10w4k.css';
import '../../css/a/a_qwvcclc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfzWPXdNC" x1="10" x2="14" y1="11" y2="13" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ie7zch5au wm-k"/><path class="vw5u10w4k wm-deco"/><path fill="url(#SVGfzWPXdNC)" class="a_qwvcclc wm-k"/></g>`,
		"fallback": "withicons-valentine:minus",
	});
}

export default Component;
