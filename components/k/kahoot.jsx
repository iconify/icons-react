import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onn7hn6ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onn7hn6ua"/>`,
		"fallback": "simple-icons:kahoot",
	});
}

export default Component;
