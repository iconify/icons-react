import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlsoow8qq.css';
import '../../css/a/agv7b5b0y.css';
import '../../css/j/j8y8wybxz.css';
import '../../css/w/wixyovb7d.css';
import '../../css/f/fg9hpm71u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tlsoow8qq"/><path class="agv7b5b0y"/><path class="j8y8wybxz"/><path class="wixyovb7d"/><path class="fg9hpm71u"/></g>`,
		"fallback": "solar:printer-2-broken",
	});
}

export default Component;
