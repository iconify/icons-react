import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4f6f8byj.css';
import '../../css/q/qren0kb9n.css';
import '../../css/e/e0z-6ee1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4f6f8byj"/><path class="qren0kb9n"/><path class="e0z-6ee1n"/></g>`,
		"fallback": "solar:kanban-broken",
	});
}

export default Component;
