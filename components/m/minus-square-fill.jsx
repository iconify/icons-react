import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm4iebcjt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm4iebcjt"/>`,
		"fallback": "ant-design:minus-square-fill",
	});
}

export default Component;
