import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4-b1jbhx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4-b1jbhx"/>`,
		"fallback": "streamline:interface-edit-pathfinder-divide-pathfinder-divide-work",
	});
}

export default Component;
