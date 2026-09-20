import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyxb3qb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyxb3qb4v"/>`,
		"fallback": "mingcute:rewind-backward-5-fill",
	});
}

export default Component;
