import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0lhnbbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0lhnbbdy"/>`,
		"fallback": "mingcute:spade-fill",
	});
}

export default Component;
