import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f57e4fxjm.css';

const viewBox = {"width":482,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f57e4fxjm"/>`,
		"fallback": "fa6-brands:ussunnah",
	});
}

export default Component;
