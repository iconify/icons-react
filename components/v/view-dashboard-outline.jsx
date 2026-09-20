import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv3b01bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv3b01bmj"/>`,
		"fallback": "mdi:view-dashboard-outline",
	});
}

export default Component;
