import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo0sf5qbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo0sf5qbr"/>`,
		"fallback": "simple-icons:maytag",
	});
}

export default Component;
