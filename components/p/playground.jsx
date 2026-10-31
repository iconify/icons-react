import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/doqawmvkb.css';
import '../../css/h/hi69bz2yb.css';
import '../../css/u/upghx7b9c.css';
import '../../css/q/qz_eibc6o.css';
import '../../css/h/hffkl6b6d.css';
import '../../css/z/z2nwp7brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1xoKvfJW" x1="10.49" x2="14.49" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="doqawmvkb wm-k"/><path class="hi69bz2yb wm-deco"/><path fill="url(#SVG1xoKvfJW)" class="upghx7b9c wm-k"/><path class="qz_eibc6o wm-shadow"/><path class="hffkl6b6d wm-shine"/><path class="wm-shine z2nwp7brc"/></g>`,
		"fallback": "withicons-valentine:playground",
	});
}

export default Component;
