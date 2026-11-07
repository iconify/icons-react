import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_aluvvdv.css';
import '../../css/o/oj3cw1blx.css';
import '../../css/h/hepad7g3n.css';
import '../../css/w/w6r8jvb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_aluvvdv"/><path class="oj3cw1blx"/><path class="hepad7g3n"/><path clip-rule="evenodd" class="w6r8jvb9z"/>`,
		"fallback": "solar:kanban-square-outline",
	});
}

export default Component;
