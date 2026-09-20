import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e37f7lbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e37f7lbjd"/>`,
		"fallback": "simple-icons:underarmour",
	});
}

export default Component;
