import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhgg44a_m.css';
import '../../css/z/z3646nb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhgg44a_m"/><path class="z3646nb7d"/></g>`,
		"fallback": "reicon:skip-next-duotone",
	});
}

export default Component;
