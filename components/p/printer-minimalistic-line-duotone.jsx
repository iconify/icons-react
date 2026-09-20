import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/culec24yp.css';
import '../../css/l/l-sg7_bax.css';
import '../../css/d/dcs8ey39w.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="culec24yp"/><path class="l-sg7_bax"/><path class="dcs8ey39w"/><path class="hx-wuc0xm"/></g>`,
		"fallback": "solar:printer-minimalistic-line-duotone",
	});
}

export default Component;
