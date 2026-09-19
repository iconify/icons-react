import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_9z6yunr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_9z6yunr"/>`,
		"fallback": "iconoir:package",
	});
}

export default Component;
