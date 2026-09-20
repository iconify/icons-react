import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8l4qwvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8l4qwvy"/>`,
		"fallback": "mdi:timeline-remove",
	});
}

export default Component;
