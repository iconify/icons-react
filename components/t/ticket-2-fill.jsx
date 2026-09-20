import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfpomty1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfpomty1i"/>`,
		"fallback": "ri:ticket-2-fill",
	});
}

export default Component;
