import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx3j4ua7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx3j4ua7u"/>`,
		"fallback": "simple-icons:vitepress",
	});
}

export default Component;
