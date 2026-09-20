import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2yg04bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2yg04bbi"/>`,
		"fallback": "mingcute:star-topper-fill",
	});
}

export default Component;
