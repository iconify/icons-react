import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0m-gp8wq.css';
import '../../css/n/nllo96y1n.css';
import '../../css/r/ro4pfvbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0m-gp8wq"/><path class="nllo96y1n"/><path class="ro4pfvbsr"/>`,
		"fallback": "solar:kanban-bold-duotone",
	});
}

export default Component;
