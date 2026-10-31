import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sqpomyhwi.css';
import '../../css/q/qwnvbqbtn.css';
import '../../css/x/xt-h8vtrh.css';
import '../../css/y/y4ryxyttu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGySQrYbWZ" x1="9" x2="15" y1="1.51" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGySQrYbWZ)" class="sqpomyhwi"/><path class="qwnvbqbtn wm-shine"/><path class="wm-shine xt-h8vtrh"/><path class="wm-shine y4ryxyttu"/></g>`,
		"fallback": "withicons-utsav:tent",
	});
}

export default Component;
