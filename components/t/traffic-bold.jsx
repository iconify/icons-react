import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk6nt8boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk6nt8boj"/>`,
		"fallback": "solar:traffic-bold",
	});
}

export default Component;
