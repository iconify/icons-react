import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1j-u4bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1j-u4bid"/>`,
		"fallback": "eva:loader-outline",
	});
}

export default Component;
