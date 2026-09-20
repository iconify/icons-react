import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/npxa2k15o.css';
import '../../css/d/dhkx30b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="npxa2k15o"/><path class="dhkx30b7q"/></g>`,
		"fallback": "solar:shield-keyhole-line-duotone",
	});
}

export default Component;
