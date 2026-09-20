import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxxj42bxd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxxj42bxd"/>`,
		"fallback": "simple-line-icons:social-dribbble",
	});
}

export default Component;
