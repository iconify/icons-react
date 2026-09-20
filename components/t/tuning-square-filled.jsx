import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gk78cpd_x.css';
import '../../css/x/x9ms3tchw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gk78cpd_x"/><path clip-rule="evenodd" class="x9ms3tchw"/></g>`,
		"fallback": "reicon:tuning-square-filled",
	});
}

export default Component;
