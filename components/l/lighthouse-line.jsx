import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdi7fsh1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdi7fsh1r"/>`,
		"fallback": "mingcute:lighthouse-line",
	});
}

export default Component;
