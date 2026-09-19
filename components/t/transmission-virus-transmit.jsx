import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w9piptbys.css';
import '../../css/m/m4w4j7bfr.css';
import '../../css/q/qz5m2hbef.css';
import '../../css/q/qw07cp7jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w9piptbys"/><path class="m4w4j7bfr"/><path class="qz5m2hbef"/><path class="qw07cp7jn"/></g>`,
		"fallback": "covid:transmission-virus-transmit",
	});
}

export default Component;
