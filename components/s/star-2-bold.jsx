import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4fiz0l4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4fiz0l4y"/>`,
		"fallback": "solar:star-2-bold",
	});
}

export default Component;
