import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/occiy068q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="occiy068q"/>`,
		"fallback": "hugeicons:square-dashed-kanban",
	});
}

export default Component;
