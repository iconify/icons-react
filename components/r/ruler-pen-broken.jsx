import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jo0aru4tr.css';
import '../../css/r/rrxhurnze.css';
import '../../css/t/t_y7u4eyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jo0aru4tr"/><path class="rrxhurnze"/><path class="t_y7u4eyk"/></g>`,
		"fallback": "solar:ruler-pen-broken",
	});
}

export default Component;
