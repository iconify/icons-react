import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onfod63xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onfod63xi"/>`,
		"fallback": "iconaut:kanban-solid",
	});
}

export default Component;
