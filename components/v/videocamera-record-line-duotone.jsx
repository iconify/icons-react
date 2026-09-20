import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f57-ii-8e.css';
import '../../css/l/l3o4rbo3n.css';
import '../../css/x/xyc-er8fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f57-ii-8e"/><path class="l3o4rbo3n"/><path class="xyc-er8fc"/></g>`,
		"fallback": "solar:videocamera-record-line-duotone",
	});
}

export default Component;
