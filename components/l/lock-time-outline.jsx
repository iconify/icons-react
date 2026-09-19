import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq_7pjv9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq_7pjv9g"/>`,
		"fallback": "flowbite:lock-time-outline",
	});
}

export default Component;
