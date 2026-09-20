import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd7ol973y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd7ol973y"/>`,
		"fallback": "mdi:kitesurfing",
	});
}

export default Component;
