import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/du-5mnkon.css';
import '../../css/r/r-1cn3b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="du-5mnkon"/><path class="r-1cn3b8g"/></g>`,
		"fallback": "solar:map-arrow-square-linear",
	});
}

export default Component;
