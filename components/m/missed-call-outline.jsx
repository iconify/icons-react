import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy31kfb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy31kfb6q"/>`,
		"fallback": "flowbite:missed-call-outline",
	});
}

export default Component;
