import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyy0xcbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iyy0xcbbr"/>`,
		"fallback": "griddy-icons:shopping-basket-check",
	});
}

export default Component;
