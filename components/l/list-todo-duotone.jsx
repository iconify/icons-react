import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jidodccgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jidodccgn primary"/>`,
		"fallback": "iconaut:list-todo-duotone",
	});
}

export default Component;
