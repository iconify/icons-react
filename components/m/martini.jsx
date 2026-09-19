import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndqdp5ddj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndqdp5ddj"/>`,
		"fallback": "hugeicons:martini",
	});
}

export default Component;
