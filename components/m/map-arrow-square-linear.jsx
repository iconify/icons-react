import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/k/kvf8-pq8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="kvf8-pq8g"/></g>`,
		"fallback": "solar:map-arrow-square-linear",
	});
}

export default Component;
