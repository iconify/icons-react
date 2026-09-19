import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew902cm0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew902cm0t"/>`,
		"fallback": "flowbite:laptop-file-outline",
	});
}

export default Component;
