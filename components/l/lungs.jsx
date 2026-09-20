import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dayf06b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dayf06b4y"/>`,
		"fallback": "mdi:lungs",
	});
}

export default Component;
