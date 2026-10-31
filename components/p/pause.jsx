import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/f7kf8hjxs.css';
import '../../css/y/y-b9buayu.css';
import '../../css/u/uno5mwbdq.css';
import '../../css/g/g9ep3nbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGingqceRh" x1="10" x2="14" y1="3.02" y2="20.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="f7kf8hjxs wm-k"/><path class="wm-deco y-b9buayu"/><path fill="url(#SVGingqceRh)" class="uno5mwbdq wm-k"/><path class="g9ep3nbqi wm-shadow"/></g>`,
		"fallback": "withicons-valentine:pause",
	});
}

export default Component;
