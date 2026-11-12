import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybgh70bly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybgh70bly"/>`,
		"fallback": "selfhst:phpmyadmin",
	});
}

export default Component;
