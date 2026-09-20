import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epal951kr.css';
import '../../css/e/ehixf6b3p.css';
import '../../css/o/oks01uo_f.css';
import '../../css/b/b8rq-7bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epal951kr"/><path class="ehixf6b3p"/><path class="oks01uo_f"/><path class="b8rq-7bqr"/></g>`,
		"fallback": "solar:pipette-bold-duotone",
	});
}

export default Component;
