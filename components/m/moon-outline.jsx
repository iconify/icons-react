import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svuil6b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svuil6b7p"/>`,
		"fallback": "flowbite:moon-outline",
	});
}

export default Component;
