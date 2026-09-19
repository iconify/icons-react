import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e60q68won.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e60q68won"/>`,
		"fallback": "ant-design:pic-right",
	});
}

export default Component;
