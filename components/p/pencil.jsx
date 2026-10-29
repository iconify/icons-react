import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/y/ycw272bgw.css';
import '../../css/i/iuiqwp8hd.css';
import '../../css/i/i5545kb8c.css';
import '../../css/h/hs9rds5_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdMtFhbKj" x1="0" x2="0" y1="-45.35" y2="74.65" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGYKtXjNBX" x1="2.4" x2="21.4" y1="2.6" y2="21.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGdMtFhbKj)" class="wm-shadow ycw272bgw"/><path class="iuiqwp8hd wm-k"/><path fill="url(#SVGYKtXjNBX)" class="i5545kb8c wm-k"/><path class="hs9rds5_o wm-a"/></g>`,
		"fallback": "withicons-suite:pencil",
	});
}

export default Component;
