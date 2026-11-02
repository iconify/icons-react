import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0cr5ef3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0cr5ef3t"/>`,
		"fallback": "mingcute:unfold-vertical-fill",
	});
}

export default Component;
