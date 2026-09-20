import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5m4xkr1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5m4xkr1v"/>`,
		"fallback": "mdi:invoice-text-check-outline",
	});
}

export default Component;
