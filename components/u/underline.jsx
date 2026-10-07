import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nskt8_var.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nskt8_var"/>`,
		"fallback": "iconoir:underline",
	});
}

export default Component;
