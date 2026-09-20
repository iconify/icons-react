import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aop-n-4fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aop-n-4fi"/>`,
		"fallback": "mdi:person-network-outline",
	});
}

export default Component;
