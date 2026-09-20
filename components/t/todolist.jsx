import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct7yciqgb.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct7yciqgb"/>`,
		"fallback": "wpf:todolist",
	});
}

export default Component;
