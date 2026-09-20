import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woz-1qbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woz-1qbwu"/>`,
		"fallback": "streamline-sharp:text-style",
	});
}

export default Component;
