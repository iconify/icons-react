import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olk55wbzr.css';
import '../../css/n/n9tma869k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="olk55wbzr secondary"/><path class="n9tma869k primary"/></g>`,
		"fallback": "iconaut:kanban-duotone",
	});
}

export default Component;
