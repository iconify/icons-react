import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oflno8b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oflno8b8t"/>`,
		"fallback": "flowbite:thumbs-up-outline",
	});
}

export default Component;
