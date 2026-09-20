import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev4u0tl6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev4u0tl6v"/>`,
		"fallback": "mdi:virus",
	});
}

export default Component;
