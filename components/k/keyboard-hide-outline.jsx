import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxqykvbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxqykvbns"/>`,
		"fallback": "mdi:keyboard-hide-outline",
	});
}

export default Component;
