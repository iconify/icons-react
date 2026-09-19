import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8rrb8l5n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8rrb8l5n"/>`,
		"fallback": "ep:watermelon",
	});
}

export default Component;
