import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vndabwbia.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vndabwbia"/>`,
		"fallback": "fa6-brands:reddit-square",
	});
}

export default Component;
