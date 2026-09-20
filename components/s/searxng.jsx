import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0xzisoev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0xzisoev"/>`,
		"fallback": "simple-icons:searxng",
	});
}

export default Component;
