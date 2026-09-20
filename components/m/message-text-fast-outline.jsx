import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgchb91wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgchb91wy"/>`,
		"fallback": "mdi:message-text-fast-outline",
	});
}

export default Component;
