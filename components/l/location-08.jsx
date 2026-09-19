import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t2p3rg45v.css';
import '../../css/f/frli32bnn.css';
import '../../css/l/ljd34hyaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t2p3rg45v"/><path class="frli32bnn"/><path class="ljd34hyaq"/></g>`,
		"fallback": "hugeicons:location-08",
	});
}

export default Component;
