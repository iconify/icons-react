import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ojmmb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ojmmb5u"/>`,
		"fallback": "mynaui:square-kanban-solid",
	});
}

export default Component;
