import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dc43t0b2s.css';
import '../../css/p/pgvt321cd.css';
import '../../css/d/dwptqjbme.css';
import '../../css/c/c_z_abcdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dc43t0b2s"/><path class="pgvt321cd"/><path class="dwptqjbme"/><path clip-rule="evenodd" class="c_z_abcdd"/></g>`,
		"fallback": "solar:kanban-square-outline",
	});
}

export default Component;
