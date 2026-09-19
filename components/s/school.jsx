import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6zyj1bnh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6zyj1bnh"/>`,
		"fallback": "fa-solid:school",
	});
}

export default Component;
