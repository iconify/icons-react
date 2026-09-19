import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh4aqo1ps.css';

const viewBox = {"width":666,"height":702};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh4aqo1ps"/>`,
		"fallback": "ls:location",
	});
}

export default Component;
