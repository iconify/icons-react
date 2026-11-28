import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chdr2jb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chdr2jb9b"/>`,
		"fallback": "iconaut:message-square-check-solid",
	});
}

export default Component;
