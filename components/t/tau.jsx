import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3a3tcb6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3a3tcb6e"/>`,
		"fallback": "cryptocurrency:tau",
	});
}

export default Component;
