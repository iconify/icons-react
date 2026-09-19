import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq6h8d1ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq6h8d1ig"/>`,
		"fallback": "fontisto:ticket-alt",
	});
}

export default Component;
