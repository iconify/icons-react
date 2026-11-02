import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1u4wlb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1u4wlb0n"/>`,
		"fallback": "mingcute:refresh-4-fill",
	});
}

export default Component;
