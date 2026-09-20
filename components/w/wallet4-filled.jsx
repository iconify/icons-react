import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ep55h-hax.css';
import '../../css/t/to5-7ybbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ep55h-hax"/><path class="to5-7ybbh"/></g>`,
		"fallback": "reicon:wallet4-filled",
	});
}

export default Component;
