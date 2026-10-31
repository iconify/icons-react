import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vgjafqbcf.css';
import '../../css/u/u6p-fq3ti.css';
import '../../css/i/iw4t05brr.css';
import '../../css/a/aobpg8b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPbjtzepc" x1="10" x2="14" y1="3.13" y2="20.88" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vgjafqbcf wm-k"/><path class="u6p-fq3ti wm-deco"/><path fill="url(#SVGPbjtzepc)" class="iw4t05brr wm-k"/><path class="aobpg8b1l wm-shadow"/></g>`,
		"fallback": "withicons-valentine:more-vertical",
	});
}

export default Component;
