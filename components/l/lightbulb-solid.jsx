import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihk4kgyae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ihk4kgyae"/>`,
		"fallback": "flowbite:lightbulb-solid",
	});
}

export default Component;
