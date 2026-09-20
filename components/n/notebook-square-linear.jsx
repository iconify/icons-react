import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tun-vsp7b.css';
import '../../css/l/lb_uwtm7d.css';
import '../../css/g/gfwzmm8cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tun-vsp7b"/><path class="lb_uwtm7d"/><path class="gfwzmm8cw"/></g>`,
		"fallback": "solar:notebook-square-linear",
	});
}

export default Component;
