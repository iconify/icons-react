import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knk5ty9ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knk5ty9ao"/>`,
		"fallback": "hugeicons:stairs-04",
	});
}

export default Component;
