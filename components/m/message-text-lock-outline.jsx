import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbnm2ob4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbnm2ob4z"/>`,
		"fallback": "mdi:message-text-lock-outline",
	});
}

export default Component;
