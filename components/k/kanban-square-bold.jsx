import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw1ob8z1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pw1ob8z1c"/>`,
		"fallback": "solar:kanban-square-bold",
	});
}

export default Component;
