import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt707fbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt707fbnl"/>`,
		"fallback": "uil:luggage-cart",
	});
}

export default Component;
