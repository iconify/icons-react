import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1d-uv5we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i1d-uv5we"/>`,
		"fallback": "mingcute:list-check-3-fill",
	});
}

export default Component;
