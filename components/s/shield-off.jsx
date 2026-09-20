import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3xk5bt5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3xk5bt5o"/>`,
		"fallback": "lucide:shield-off",
	});
}

export default Component;
