import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcx3l54-y.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcx3l54-y"/>`,
		"fallback": "ls:pause",
	});
}

export default Component;
