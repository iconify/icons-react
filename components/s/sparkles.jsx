import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk0wdd05p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk0wdd05p"/>`,
		"fallback": "heroicons-solid:sparkles",
	});
}

export default Component;
