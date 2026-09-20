import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsph4ybax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsph4ybax"/>`,
		"fallback": "mdi:order-alphabetical-ascending",
	});
}

export default Component;
