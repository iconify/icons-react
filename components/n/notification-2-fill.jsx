import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww4ub9yah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww4ub9yah"/>`,
		"fallback": "ri:notification-2-fill",
	});
}

export default Component;
