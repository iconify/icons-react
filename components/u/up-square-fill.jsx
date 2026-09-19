import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxtonqjjd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxtonqjjd"/>`,
		"fallback": "ant-design:up-square-fill",
	});
}

export default Component;
