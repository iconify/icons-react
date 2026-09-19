import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyok70tso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyok70tso"/>`,
		"fallback": "eva:tv-outline",
	});
}

export default Component;
