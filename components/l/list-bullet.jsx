import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu1ta9w8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hu1ta9w8f"/>`,
		"fallback": "heroicons-solid:list-bullet",
	});
}

export default Component;
