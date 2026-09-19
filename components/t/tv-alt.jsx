import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0bymlb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0bymlb8t"/>`,
		"fallback": "boxicons:tv-alt",
	});
}

export default Component;
