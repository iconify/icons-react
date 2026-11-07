import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/psmf3u5ps.css';
import '../../css/l/llcm39b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="psmf3u5ps"/><path class="llcm39b1n"/></g>`,
		"fallback": "solar:stars-linear",
	});
}

export default Component;
