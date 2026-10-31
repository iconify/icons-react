import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8sz2mb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8sz2mb9q"/>`,
		"fallback": "vadivam:square-kanban-plus",
	});
}

export default Component;
