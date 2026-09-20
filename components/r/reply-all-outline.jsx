import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmlb6r02r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmlb6r02r"/>`,
		"fallback": "mdi:reply-all-outline",
	});
}

export default Component;
