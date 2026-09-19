import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg3l_9b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg3l_9b1y"/>`,
		"fallback": "flowbite:user-graduate-outline",
	});
}

export default Component;
