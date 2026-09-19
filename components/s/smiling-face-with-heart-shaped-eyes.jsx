import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz9vf6d5q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz9vf6d5q"/>`,
		"fallback": "dinkie-icons:smiling-face-with-heart-shaped-eyes",
	});
}

export default Component;
