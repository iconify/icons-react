import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1em_sbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1em_sbkz"/>`,
		"fallback": "mdi:sun-shade-outline",
	});
}

export default Component;
