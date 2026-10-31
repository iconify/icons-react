import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6ps_6bhz.css';
import '../../css/q/qf2zmutdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6ps_6bhz"/><path class="qf2zmutdz"/></g>`,
		"fallback": "coolicons:square-dashed-square-bulk-round",
	});
}

export default Component;
