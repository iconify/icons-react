import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb_9esbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb_9esbok"/>`,
		"fallback": "ri:sparkling-2-line",
	});
}

export default Component;
