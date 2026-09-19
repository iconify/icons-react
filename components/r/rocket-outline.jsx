import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9fy5tbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9fy5tbbm"/>`,
		"fallback": "flowbite:rocket-outline",
	});
}

export default Component;
