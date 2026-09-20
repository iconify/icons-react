import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbnmj0bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbnmj0bfm"/>`,
		"fallback": "mdi:invoice-remove",
	});
}

export default Component;
