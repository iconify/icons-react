import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sab7-bbul.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sab7-bbul"/>`,
		"fallback": "fa-brands:quora",
	});
}

export default Component;
