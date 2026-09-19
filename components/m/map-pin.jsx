import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcg3xqugq.css';
import '../../css/r/riq5-ebok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcg3xqugq"/><path class="riq5-ebok"/></g>`,
		"fallback": "hugeicons:map-pin",
	});
}

export default Component;
