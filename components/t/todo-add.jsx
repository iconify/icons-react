import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7xvi4-_i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7xvi4-_i"/>`,
		"fallback": "pajamas:todo-add",
	});
}

export default Component;
