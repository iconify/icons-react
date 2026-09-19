import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbcyqz5cm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbcyqz5cm"/>`,
		"fallback": "fa6-solid:user-tie",
	});
}

export default Component;
