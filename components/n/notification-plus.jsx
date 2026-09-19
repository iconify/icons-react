import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg2tb8bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg2tb8bko"/>`,
		"fallback": "ci:notification-plus",
	});
}

export default Component;
