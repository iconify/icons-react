import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr3vlkb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr3vlkb3v"/>`,
		"fallback": "lucide:message-circle-plus",
	});
}

export default Component;
