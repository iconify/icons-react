import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we4sd1bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we4sd1bgf"/>`,
		"fallback": "mdi:invoice-text-edit",
	});
}

export default Component;
