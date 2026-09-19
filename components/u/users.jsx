import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1b5snbut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1b5snbut"/>`,
		"fallback": "heroicons-solid:users",
	});
}

export default Component;
