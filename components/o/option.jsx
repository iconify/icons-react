import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7j7_dq-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7j7_dq-q"/>`,
		"fallback": "bi:option",
	});
}

export default Component;
