import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c04q_6b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c04q_6b4d"/>`,
		"fallback": "circum:shopping-cart",
	});
}

export default Component;
