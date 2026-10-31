import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/auf4fssjd.css';
import '../../css/h/hvio39bqi.css';
import '../../css/a/a34f1egrw.css';
import '../../css/a/a80spbc7o.css';
import '../../css/f/fx6adtbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqvUefcPi" x1="9" x2="15" y1="1.57" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGqvUefcPi)" class="auf4fssjd"/><path class="hvio39bqi wm-a"/><path class="a34f1egrw wm-shine"/><path class="a80spbc7o wm-shine"/><path class="fx6adtbrd wm-shine"/></g>`,
		"fallback": "withicons-utsav:wallet-cards",
	});
}

export default Component;
