import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0jiv0brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0jiv0brb"/>`,
		"fallback": "mdi:timeline-question-outline",
	});
}

export default Component;
