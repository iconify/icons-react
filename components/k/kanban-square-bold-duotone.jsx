import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suyoj3b9r.css';
import '../../css/r/r_aluvvdv.css';
import '../../css/o/oj3cw1blx.css';
import '../../css/h/hepad7g3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suyoj3b9r"/><path class="r_aluvvdv"/><path class="oj3cw1blx"/><path class="hepad7g3n"/>`,
		"fallback": "solar:kanban-square-bold-duotone",
	});
}

export default Component;
