import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnswbtccq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnswbtccq"/>`,
		"fallback": "flowbite:users-outline",
	});
}

export default Component;
