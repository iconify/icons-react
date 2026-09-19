import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7wdk6bcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7wdk6bcc"/>`,
		"fallback": "heroicons-solid:ticket",
	});
}

export default Component;
