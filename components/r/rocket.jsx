import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/g7trs0bqv.css';
import '../../css/i/ilpzj2zma.css';
import '../../css/b/buteykbxj.css';
import '../../css/m/mxsqzkist.css';
import '../../css/p/p-n-o6b8r.css';
import '../../css/f/fahsidtfj.css';
import '../../css/h/hs5_2hbox.css';
import '../../css/s/s-75ilt_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGuwRSLeAn" cx="7.15" cy="6.4" r="26.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGnOLOBb9F" x1="0" x2="0" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7trs0bqv"/><stop offset=".5" class="g7trs0bqv"/><stop offset="1" class="pgqql6bua"/></linearGradient></defs><path class="ilpzj2zma wm-shadow"/><path fill="url(#SVGnOLOBb9F)" class="buteykbxj wm-a"/><path fill="url(#SVGuwRSLeAn)" class="mxsqzkist wm-k"/><path class="p-n-o6b8r wm-k"/><path class="fahsidtfj wm-k"/><path class="hs5_2hbox wm-shine"/><path class="s-75ilt_e wm-deco"/></g>`,
		"fallback": "withicons-rangoli:rocket",
	});
}

export default Component;
