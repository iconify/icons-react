import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsjz9qa0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsjz9qa0u"/>`,
		"fallback": "mdi:phone",
	});
}

export default Component;
