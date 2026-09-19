import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdmjhqxzt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdmjhqxzt"/>`,
		"fallback": "fa7-solid:minus-square",
	});
}

export default Component;
