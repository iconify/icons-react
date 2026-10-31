import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/p2k18g0zs.css';
import '../../css/x/xw1k7mbva.css';
import '../../css/r/ruahoswgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGlmZOLdUL" x1="9.75" x2="13.75" y1="3" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="p2k18g0zs wm-k"/><path class="wm-deco xw1k7mbva"/><path fill="url(#SVGlmZOLdUL)" class="ruahoswgp wm-k"/></g>`,
		"fallback": "withicons-valentine:list-checks",
	});
}

export default Component;
