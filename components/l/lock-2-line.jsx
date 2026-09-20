import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uudoe427q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uudoe427q"/>`,
		"fallback": "ri:lock-2-line",
	});
}

export default Component;
