import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0hof8b7k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0hof8b7k"/>`,
		"fallback": "f7:rotate-left-fill",
	});
}

export default Component;
