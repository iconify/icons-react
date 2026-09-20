import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehopu0b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehopu0b_i"/>`,
		"fallback": "token:via",
	});
}

export default Component;
