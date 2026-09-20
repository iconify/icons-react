import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktj6559nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktj6559nw"/>`,
		"fallback": "mdi:view-day-outline",
	});
}

export default Component;
