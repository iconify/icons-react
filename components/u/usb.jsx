import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/s/s8fah6bka.css';
import '../../css/e/e9n2nibrt.css';
import '../../css/k/kogtfubpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGg8MOkbCr" x1="0" x2="0" y1="-45.5" y2="74.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGtXegcdDr" x1="2.8" x2="21.4" y1="1.1" y2="22.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGg8MOkbCr)" class="s8fah6bka wm-shadow"/><path class="e9n2nibrt wm-k"/><path fill="url(#SVGtXegcdDr)" class="kogtfubpn wm-k"/></g>`,
		"fallback": "withicons-suite:usb",
	});
}

export default Component;
