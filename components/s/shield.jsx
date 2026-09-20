import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl_1mshxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl_1mshxy"/>`,
		"fallback": "mdi-light:shield",
	});
}

export default Component;
