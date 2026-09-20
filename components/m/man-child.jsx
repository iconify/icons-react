import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccir8bbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccir8bbva"/>`,
		"fallback": "mdi:man-child",
	});
}

export default Component;
