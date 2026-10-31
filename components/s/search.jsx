import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/l__gf2b1d.css';
import '../../css/e/ey--f3weg.css';
import '../../css/t/tu6okeb3c.css';
import '../../css/e/ee3-lbcyq.css';
import '../../css/w/wvi39rbej.css';
import '../../css/f/fd_5ez-mn.css';
import '../../css/l/lcohj1bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyVnficJd" x1="8.99" x2="14.99" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyVnficJd)" class="l__gf2b1d"/><path class="ey--f3weg wm-a"/><path class="tu6okeb3c wm-shine"/><path class="ee3-lbcyq wm-shine"/><path class="wm-shine wvi39rbej"/><path class="fd_5ez-mn wm-shine"/><path class="lcohj1bvt wm-shine"/></g>`,
		"fallback": "withicons-utsav:search",
	});
}

export default Component;
