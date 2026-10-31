import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kkmgjgbnk.css';
import '../../css/a/ar0m9hbut.css';
import '../../css/s/sp2ktbf1b.css';
import '../../css/d/dby9qgjyv.css';
import '../../css/t/tvjny_bfz.css';
import '../../css/n/n7455lb9i.css';
import '../../css/l/l7bgqyrar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmetLHcpb" x1="10" x2="14" y1=".96" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kkmgjgbnk wm-k"/><path class="ar0m9hbut wm-a"/><path class="sp2ktbf1b wm-deco"/><path fill="url(#SVGmetLHcpb)" class="dby9qgjyv wm-k"/><path class="tvjny_bfz wm-a"/><path class="n7455lb9i wm-shadow"/><path class="l7bgqyrar wm-shine"/></g>`,
		"fallback": "withicons-valentine:podcast",
	});
}

export default Component;
