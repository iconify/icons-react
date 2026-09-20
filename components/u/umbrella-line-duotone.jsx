import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijy1fuv4o.css';
import '../../css/i/i399u_bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ijy1fuv4o"/><path class="i399u_bue"/></g>`,
		"fallback": "solar:umbrella-line-duotone",
	});
}

export default Component;
