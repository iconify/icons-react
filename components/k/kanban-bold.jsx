import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nllo96y1n.css';
import '../../css/r/ro4pfvbsr.css';
import '../../css/k/kb3bwobho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nllo96y1n"/><path class="ro4pfvbsr"/><path class="kb3bwobho"/>`,
		"fallback": "solar:kanban-bold",
	});
}

export default Component;
