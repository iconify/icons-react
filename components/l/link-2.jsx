import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/erp5hyovv.css';
import '../../css/m/m1sk_72_p.css';
import '../../css/m/makwin4_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGoPTDMd3k" x1="10" x2="14" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="erp5hyovv wm-k"/><path class="m1sk_72_p wm-deco"/><path fill="url(#SVGoPTDMd3k)" class="makwin4_p wm-k"/></g>`,
		"fallback": "withicons-valentine:link-2",
	});
}

export default Component;
