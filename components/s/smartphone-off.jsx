import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s19nmm6ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s19nmm6ry"/>`,
		"fallback": "mdi:smartphone-off",
	});
}

export default Component;
