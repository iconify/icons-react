import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kok5zc6gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kok5zc6gh"/>`,
		"fallback": "solar:programming-bold",
	});
}

export default Component;
