import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i7w17ebbl.css';
import '../../css/y/y9ps5qbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i7w17ebbl"/><path class="y9ps5qbgi"/></g>`,
		"fallback": "hugeicons:pathfinder-minus-front",
	});
}

export default Component;
