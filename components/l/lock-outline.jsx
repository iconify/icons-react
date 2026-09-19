import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyf8j3bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyf8j3bsu"/>`,
		"fallback": "flowbite:lock-outline",
	});
}

export default Component;
