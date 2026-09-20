import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-924ac3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-924ac3c"/>`,
		"fallback": "ri:prohibited-2-fill",
	});
}

export default Component;
