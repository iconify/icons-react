import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z3hoysruc.css';
import '../../css/u/uuj0jabmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z3hoysruc"/><path class="uuj0jabmx"/></g>`,
		"fallback": "reicon:link4-duotone",
	});
}

export default Component;
