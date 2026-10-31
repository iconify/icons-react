import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gnqoa7oom.css';
import '../../css/e/enliqlrvd.css';
import '../../css/x/x08aqxsnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkzy6Gdry" x1="8.01" x2="14.01" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGkzy6Gdry)" class="gnqoa7oom"/><path class="enliqlrvd wm-a"/><path class="wm-shine x08aqxsnr"/></g>`,
		"fallback": "withicons-utsav:timer-reset",
	});
}

export default Component;
