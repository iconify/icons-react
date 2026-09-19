import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onqa8ukgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onqa8ukgj"/>`,
		"fallback": "griddy-icons:twitch",
	});
}

export default Component;
