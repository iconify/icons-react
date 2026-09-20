import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu7_340-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu7_340-i"/>`,
		"fallback": "mdi:message-question-outline",
	});
}

export default Component;
