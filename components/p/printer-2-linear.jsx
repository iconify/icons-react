import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hx-wuc0xm.css';
import '../../css/t/tlsoow8qq.css';
import '../../css/a/agv7b5b0y.css';
import '../../css/y/yr50s0b9v.css';
import '../../css/w/wixyovb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hx-wuc0xm"/><path class="tlsoow8qq"/><path class="agv7b5b0y"/><path class="yr50s0b9v"/><path class="wixyovb7d"/></g>`,
		"fallback": "solar:printer-2-linear",
	});
}

export default Component;
