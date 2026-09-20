import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4pp0kbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4pp0kbcz"/>`,
		"fallback": "mdi:location-remove",
	});
}

export default Component;
