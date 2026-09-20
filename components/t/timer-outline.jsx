import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzif5jboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzif5jboz"/>`,
		"fallback": "mdi:timer-outline",
	});
}

export default Component;
