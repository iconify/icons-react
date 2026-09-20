import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fae5gbciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fae5gbciy"/>`,
		"fallback": "mage:notification-bell-download-fill",
	});
}

export default Component;
