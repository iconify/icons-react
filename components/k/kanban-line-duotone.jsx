import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osfbwubry.css';
import '../../css/q/qafvmubuv.css';
import '../../css/j/jyumk6b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="osfbwubry"/><path class="qafvmubuv"/><path class="jyumk6b3q"/></g>`,
		"fallback": "solar:kanban-line-duotone",
	});
}

export default Component;
