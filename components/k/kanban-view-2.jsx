import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhcab65mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhcab65mh"/>`,
		"fallback": "ri:kanban-view-2",
	});
}

export default Component;
