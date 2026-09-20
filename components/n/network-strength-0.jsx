import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn8k5hbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn8k5hbdo"/>`,
		"fallback": "mdi:network-strength-0",
	});
}

export default Component;
