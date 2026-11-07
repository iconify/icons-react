import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt87iveio.css';
import '../../css/i/ip-kvve8g.css';
import '../../css/m/m0ij-vkdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lt87iveio"/><path class="ip-kvve8g"/><path class="m0ij-vkdi"/></g>`,
		"fallback": "solar:sidebar-close-line-duotone",
	});
}

export default Component;
