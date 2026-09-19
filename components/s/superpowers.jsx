import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyuy1bbpt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyuy1bbpt"/>`,
		"fallback": "fa6-brands:superpowers",
	});
}

export default Component;
