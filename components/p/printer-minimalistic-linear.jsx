import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jeest4e1g.css';
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
		"content": `<g class="ipq1z-bjh"><path class="jeest4e1g"/><path class="dcs8ey39w"/><path class="hx-wuc0xm"/></g>`,
		"fallback": "solar:printer-minimalistic-linear",
	});
}

export default Component;
