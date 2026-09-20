import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubgy9z47q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubgy9z47q"/>`,
		"fallback": "maki:scooter",
	});
}

export default Component;
