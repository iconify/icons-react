import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy2lz1b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy2lz1b8l"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-right",
	});
}

export default Component;
