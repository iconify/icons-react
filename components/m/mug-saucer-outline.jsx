import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hugphw97q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hugphw97q"/>`,
		"fallback": "flowbite:mug-saucer-outline",
	});
}

export default Component;
