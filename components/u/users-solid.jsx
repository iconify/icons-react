import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqcse3b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqcse3b8b"/>`,
		"fallback": "iconaut:users-solid",
	});
}

export default Component;
