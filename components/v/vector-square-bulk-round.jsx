import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwhycgb1s.css';
import '../../css/t/t56mgobbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwhycgb1s"/><path class="t56mgobbl"/></g>`,
		"fallback": "coolicons:vector-square-bulk-round",
	});
}

export default Component;
