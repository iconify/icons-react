import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smepu6bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smepu6bly"/>`,
		"fallback": "uil:thunderstorm",
	});
}

export default Component;
