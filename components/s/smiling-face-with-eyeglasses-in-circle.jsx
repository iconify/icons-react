import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuuh15blj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuuh15blj"/>`,
		"fallback": "pinhead:smiling-face-with-eyeglasses-in-circle",
	});
}

export default Component;
