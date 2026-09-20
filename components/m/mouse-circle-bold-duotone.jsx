import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozc9qlbqj.css';
import '../../css/l/ljrt8zb7h.css';
import '../../css/t/t9umyub6g.css';
import '../../css/e/e79neke2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozc9qlbqj"/><path class="ljrt8zb7h"/><path class="t9umyub6g"/><path class="e79neke2o"/></g>`,
		"fallback": "solar:mouse-circle-bold-duotone",
	});
}

export default Component;
