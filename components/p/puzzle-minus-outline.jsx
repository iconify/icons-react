import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt7pjxbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt7pjxbvi"/>`,
		"fallback": "mdi:puzzle-minus-outline",
	});
}

export default Component;
