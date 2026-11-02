import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c52ptkc9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c52ptkc9h"/>`,
		"fallback": "mingcute:text-align-end-fill",
	});
}

export default Component;
