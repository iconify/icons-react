import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4q2c_9ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4q2c_9ec"/>`,
		"fallback": "mdi:timeline-plus-outline",
	});
}

export default Component;
