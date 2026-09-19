import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0su68bht.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0su68bht"/>`,
		"fallback": "whh:l",
	});
}

export default Component;
