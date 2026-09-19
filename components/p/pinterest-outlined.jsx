import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikc3oob9k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikc3oob9k"/>`,
		"fallback": "ant-design:pinterest-outlined",
	});
}

export default Component;
