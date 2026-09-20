import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzssd7d7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzssd7d7z"/>`,
		"fallback": "simple-icons:lg",
	});
}

export default Component;
