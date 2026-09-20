import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktrc50b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktrc50b7v"/>`,
		"fallback": "mdi:virus-outline",
	});
}

export default Component;
