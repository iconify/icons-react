import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/ki0r1v2zv.css';
import '../../css/v/v13ubvqbr.css';
import '../../css/v/v8gtyhbto.css';
import '../../css/y/y9jdes7rt.css';
import '../../css/v/vtl_yubfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgnYCRH1I" x1="10" x2="14" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ki0r1v2zv wm-k"/><path class="v13ubvqbr wm-deco"/><path fill="url(#SVGgnYCRH1I)" class="v8gtyhbto wm-k"/><path class="wm-shadow y9jdes7rt"/><path class="vtl_yubfs wm-shine"/></g>`,
		"fallback": "withicons-valentine:refresh",
	});
}

export default Component;
