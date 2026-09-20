import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyo9g4bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyo9g4bzt"/>`,
		"fallback": "ri:kanban-view",
	});
}

export default Component;
