import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_s4zp7_q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_s4zp7_q"/>`,
		"fallback": "whh:shutdown",
	});
}

export default Component;
