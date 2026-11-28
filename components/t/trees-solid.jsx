import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3bhoub7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3bhoub7k"/>`,
		"fallback": "iconaut:trees-solid",
	});
}

export default Component;
