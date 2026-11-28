import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mywcv6bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mywcv6bea"/>`,
		"fallback": "noviair-light:message-square-plus",
	});
}

export default Component;
