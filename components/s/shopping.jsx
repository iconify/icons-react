import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2bbw8bjh.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2bbw8bjh"/>`,
		"fallback": "whh:shopping",
	});
}

export default Component;
