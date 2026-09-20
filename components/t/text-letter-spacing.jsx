import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p52gpacak.css';
import '../../css/v/vz9gfvbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p52gpacak"/><path class="vz9gfvbkr"/></g>`,
		"fallback": "proicons:text-letter-spacing",
	});
}

export default Component;
