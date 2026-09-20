import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvn8gabrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvn8gabrb"/>`,
		"fallback": "mdi:invoice-text-check",
	});
}

export default Component;
