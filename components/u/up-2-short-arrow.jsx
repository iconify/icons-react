import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka-7rw9rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka-7rw9rx"/>`,
		"fallback": "guidance:up-2-short-arrow",
	});
}

export default Component;
