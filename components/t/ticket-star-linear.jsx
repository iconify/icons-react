import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ni7z1bc4d.css';
import '../../css/g/geve81bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ni7z1bc4d"/><path class="geve81bjb"/></g>`,
		"fallback": "solar:ticket-star-linear",
	});
}

export default Component;
