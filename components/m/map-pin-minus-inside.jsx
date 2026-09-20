import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ub34b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ub34b3e"/>`,
		"fallback": "mynaui:map-pin-minus-inside",
	});
}

export default Component;
