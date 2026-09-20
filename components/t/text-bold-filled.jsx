import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1nmtr_wq.css';
import '../../css/e/evgv65bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e1nmtr_wq"/><path class="evgv65bsm"/></g>`,
		"fallback": "reicon:text-bold-filled",
	});
}

export default Component;
