import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9tanvb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9tanvb1z"/>`,
		"fallback": "simple-icons:trailforks",
	});
}

export default Component;
