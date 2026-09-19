import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7c9n1blo.css';

const viewBox = {"width":1085,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7c9n1blo"/>`,
		"fallback": "ls:soundcloud",
	});
}

export default Component;
