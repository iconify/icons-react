import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypjbxt-8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypjbxt-8p"/>`,
		"fallback": "flowbite:ticket-outline",
	});
}

export default Component;
