import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydce0w0ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydce0w0ol"/>`,
		"fallback": "mage:trophy-star-fill",
	});
}

export default Component;
