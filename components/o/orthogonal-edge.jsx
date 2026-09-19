import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s4z4t3bmt.css';
import '../../css/p/p1x4j2led.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s4z4t3bmt"/><path class="p1x4j2led"/></g>`,
		"fallback": "hugeicons:orthogonal-edge",
	});
}

export default Component;
