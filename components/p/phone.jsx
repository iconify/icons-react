import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7o5oob0i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7o5oob0i"/>`,
		"fallback": "simple-line-icons:phone",
	});
}

export default Component;
