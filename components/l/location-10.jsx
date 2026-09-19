import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/frli32bnn.css';
import '../../css/l/ljd34hyaq.css';
import '../../css/p/p2wr0qbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="frli32bnn"/><path class="ljd34hyaq"/><path class="p2wr0qbvv"/></g>`,
		"fallback": "hugeicons:location-10",
	});
}

export default Component;
