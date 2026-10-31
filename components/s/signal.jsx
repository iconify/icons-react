import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/n5tt7wqyr.css';
import '../../css/a/ar1pdjbtg.css';
import '../../css/b/b290cc87i.css';
import '../../css/f/f7qou8bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnjLgPdje" x1="9.25" x2="13.25" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="n5tt7wqyr wm-k"/><path class="ar1pdjbtg wm-deco"/><path fill="url(#SVGnjLgPdje)" class="b290cc87i wm-k"/><path class="f7qou8bxv wm-shadow"/></g>`,
		"fallback": "withicons-valentine:signal",
	});
}

export default Component;
