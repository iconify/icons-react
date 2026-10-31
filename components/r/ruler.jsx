import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rvaehac3g.css';
import '../../css/e/e1-2ibbuk.css';
import '../../css/d/dyxgjlbau.css';
import '../../css/h/ho32h3c_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGalw7zdPP" x1="8.99" x2="14.99" y1="1.6" y2="22.41" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGalw7zdPP)" class="rvaehac3g"/><path class="e1-2ibbuk wm-shine"/><path class="dyxgjlbau wm-shine"/><path class="ho32h3c_n wm-shine"/></g>`,
		"fallback": "withicons-utsav:ruler",
	});
}

export default Component;
