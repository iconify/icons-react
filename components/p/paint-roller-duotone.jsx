import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2g5afb-w.css';
import '../../css/f/fuv68jbcx.css';
import '../../css/l/lb_q69l-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t2g5afb-w"/><path class="fuv68jbcx"/><path clip-rule="evenodd" class="lb_q69l-o"/></g>`,
		"fallback": "reicon:paint-roller-duotone",
	});
}

export default Component;
