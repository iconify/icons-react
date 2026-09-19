import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tecxd3bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tecxd3bpl"/>`,
		"fallback": "flowbite:tools-outline",
	});
}

export default Component;
