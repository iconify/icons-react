import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7e_m-v8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7e_m-v8o"/>`,
		"fallback": "flowbite:volume-up-outline",
	});
}

export default Component;
