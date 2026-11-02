import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0epbvb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0epbvb8t"/>`,
		"fallback": "mingcute:pencil-2-ai-fill",
	});
}

export default Component;
