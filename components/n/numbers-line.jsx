import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeom7qppr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeom7qppr"/>`,
		"fallback": "ri:numbers-line",
	});
}

export default Component;
