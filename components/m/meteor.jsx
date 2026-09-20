import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy4wn9bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy4wn9bud"/>`,
		"fallback": "mdi:meteor",
	});
}

export default Component;
