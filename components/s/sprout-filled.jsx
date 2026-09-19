import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ros-colzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ros-colzc"/>`,
		"fallback": "griddy-icons:sprout-filled",
	});
}

export default Component;
