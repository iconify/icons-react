import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg45pac-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg45pac-q"/>`,
		"fallback": "mdi:virus-off",
	});
}

export default Component;
