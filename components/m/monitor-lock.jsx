import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbkf7dqvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbkf7dqvh"/>`,
		"fallback": "mdi:monitor-lock",
	});
}

export default Component;
