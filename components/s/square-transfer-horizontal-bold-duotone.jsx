import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfnzs_z4j.css';
import '../../css/x/x2zczs5qh.css';
import '../../css/j/juuz00oak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wfnzs_z4j"/><path class="x2zczs5qh"/><path class="juuz00oak"/></g>`,
		"fallback": "solar:square-transfer-horizontal-bold-duotone",
	});
}

export default Component;
