import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fvkpp5e2i.css';
import '../../css/z/zw92f2bit.css';
import '../../css/e/en0tgubri.css';
import '../../css/c/cbrabab1f.css';
import '../../css/h/h_036ttfy.css';
import '../../css/o/o3wd-riex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fvkpp5e2i wm-k"/><path class="wm-deco zw92f2bit"/><path fill="url(#SVGNQi7UdpF)" class="en0tgubri wm-k"/><path class="cbrabab1f wm-shadow"/><path class="h_036ttfy wm-shine"/><path class="o3wd-riex wm-shine"/></g>`,
		"fallback": "withicons-valentine:toolbox",
	});
}

export default Component;
