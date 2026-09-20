import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g1bc3t8rn.css';
import '../../css/f/f59sa6bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g1bc3t8rn"/><path class="f59sa6bka"/></g>`,
		"fallback": "solar:laptop-2-line-duotone",
	});
}

export default Component;
