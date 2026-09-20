import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jto-0ybws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jto-0ybws"/>`,
		"fallback": "mdi:trolley-outline",
	});
}

export default Component;
