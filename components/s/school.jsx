import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtv-3quru.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtv-3quru"/>`,
		"fallback": "fa6-solid:school",
	});
}

export default Component;
