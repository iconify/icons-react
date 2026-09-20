import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlsoow8qq.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/s/si1y-5u0z.css';
import '../../css/p/psk1yp1bz.css';
import '../../css/z/zd0f8hb5r.css';
import '../../css/w/wixyovb7d.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tlsoow8qq"/><path class="hhlxfkbol"/><path class="si1y-5u0z"/><path class="psk1yp1bz"/><path class="zd0f8hb5r"/><path class="wixyovb7d"/><path class="hx-wuc0xm"/></g>`,
		"fallback": "solar:printer-linear",
	});
}

export default Component;
