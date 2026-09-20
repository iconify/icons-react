import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p4236ubtm.css';
import '../../css/y/yithp4hrr.css';
import '../../css/w/w312zsb4r.css';
import '../../css/p/p5gw4-bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p4236ubtm"/><path class="yithp4hrr"/><path class="w312zsb4r"/><path class="p5gw4-bye"/></g>`,
		"fallback": "solar:kanban-square-line-duotone",
	});
}

export default Component;
