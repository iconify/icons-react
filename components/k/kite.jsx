import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vr4i-cckm.css';
import '../../css/t/t3tzfzmwm.css';
import '../../css/c/cvkxvzb6k.css';
import '../../css/z/zj3yvzbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG01Q4XJDu" x1="9" x2="15" y1="2.16" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="vr4i-cckm wm-s"/><path fill="url(#SVG01Q4XJDu)" class="t3tzfzmwm"/><path class="cvkxvzb6k wm-s"/><path class="wm-shine zj3yvzbjq"/></g>`,
		"fallback": "withicons-utsav:kite",
	});
}

export default Component;
