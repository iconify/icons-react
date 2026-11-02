import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2bxj9bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2bxj9bez"/>`,
		"fallback": "mingcute:nintendo-switch-line",
	});
}

export default Component;
