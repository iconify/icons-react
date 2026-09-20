import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xyc-er8fc.css';
import '../../css/f/f57-ii-8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xyc-er8fc"/><path class="f57-ii-8e"/></g>`,
		"fallback": "solar:videocamera-line-duotone",
	});
}

export default Component;
