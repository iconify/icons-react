import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgkjp6s0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgkjp6s0i"/>`,
		"fallback": "mynaui:lock-password-solid",
	});
}

export default Component;
