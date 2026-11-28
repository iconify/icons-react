import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quth05bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quth05bzf"/>`,
		"fallback": "noviair-light:volume",
	});
}

export default Component;
