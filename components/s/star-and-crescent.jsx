import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnu6byhtm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnu6byhtm"/>`,
		"fallback": "fa6-solid:star-and-crescent",
	});
}

export default Component;
