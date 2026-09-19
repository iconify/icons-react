import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i188si0ua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i188si0ua"/>`,
		"fallback": "heroicons-solid:queue-list",
	});
}

export default Component;
