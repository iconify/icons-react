import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/yzxq0-khy.css';
import '../../css/n/n6m8i7bze.css';
import '../../css/m/mozp58k3n.css';
import '../../css/s/spcs6px5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRpPnMd4o" x1="10" x2="14" y1="3.38" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k yzxq0-khy"/><path class="n6m8i7bze wm-deco"/><path fill="url(#SVGRpPnMd4o)" class="mozp58k3n wm-k"/><path class="spcs6px5j wm-shadow"/></g>`,
		"fallback": "withicons-valentine:signature",
	});
}

export default Component;
