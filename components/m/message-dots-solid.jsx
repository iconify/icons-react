import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz1mh80qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz1mh80qz"/>`,
		"fallback": "pixel:message-dots-solid",
	});
}

export default Component;
