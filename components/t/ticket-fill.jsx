import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_l6o_b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_l6o_b8k"/>`,
		"fallback": "lets-icons:ticket-fill",
	});
}

export default Component;
