import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpt93kz6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpt93kz6q"/>`,
		"fallback": "iconaut:tumbler-solid",
	});
}

export default Component;
