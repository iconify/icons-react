import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kundbnbvz.css';
import '../../css/h/h1-5eacdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kundbnbvz"/><path class="h1-5eacdw"/></g>`,
		"fallback": "streamline-logos:mastercard-logo",
	});
}

export default Component;
