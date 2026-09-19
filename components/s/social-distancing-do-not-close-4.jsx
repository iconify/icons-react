import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8qx07_1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8qx07_1i"/>`,
		"fallback": "covid:social-distancing-do-not-close-4",
	});
}

export default Component;
