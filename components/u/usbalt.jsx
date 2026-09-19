import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3soo0q4e.css';

const viewBox = {"width":961,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3soo0q4e"/>`,
		"fallback": "whh:usbalt",
	});
}

export default Component;
