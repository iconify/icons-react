import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_tqjjm9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_tqjjm9r"/>`,
		"fallback": "flowbite:open-sidebar-alt-outline",
	});
}

export default Component;
