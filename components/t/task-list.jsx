import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us6p5c7zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us6p5c7zw"/>`,
		"fallback": "iconoir:task-list",
	});
}

export default Component;
