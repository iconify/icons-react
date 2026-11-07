import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ki6nuxy0u.css';
import '../../css/y/y0cxd-7om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ki6nuxy0u"/><path class="y0cxd-7om"/></g>`,
		"fallback": "solar:text-cross-line-duotone",
	});
}

export default Component;
