import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdexnxz5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdexnxz5k"/>`,
		"fallback": "mdi:star-four-points-box",
	});
}

export default Component;
