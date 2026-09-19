import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wppiylbfv.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wppiylbfv"/>`,
		"fallback": "ls:tumblr",
	});
}

export default Component;
