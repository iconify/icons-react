import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1wq2x58v.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1wq2x58v"/>`,
		"fallback": "whh:middlefinger",
	});
}

export default Component;
