import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/ufx1skbkh.css';
import '../../css/d/dq9ta3b6y.css';
import '../../css/u/uh6di0wke.css';
import '../../css/s/skvi9zc6j.css';
import '../../css/m/m74otgvmx.css';
import '../../css/h/ha8vogbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYJRgkGAz" x1="9" x2="15" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGYJRgkGAz)" class="ufx1skbkh"/><path class="dq9ta3b6y wm-a"/><path class="uh6di0wke wm-s"/><path class="skvi9zc6j wm-shine"/><path class="m74otgvmx wm-shine"/><path class="ha8vogbmn wm-shine"/></g>`,
		"fallback": "withicons-utsav:timer-off",
	});
}

export default Component;
