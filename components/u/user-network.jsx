import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg485ibrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg485ibrd"/>`,
		"fallback": "mdi:user-network",
	});
}

export default Component;
