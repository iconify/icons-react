import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4cqv-nbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4cqv-nbg"/>`,
		"fallback": "iconaut:layout-rows-solid",
	});
}

export default Component;
