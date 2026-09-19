import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1bhxrtzb.css';
import '../../css/r/rlyweob4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i1bhxrtzb"/><path class="rlyweob4p"/></g>`,
		"fallback": "codicon:mic-off",
	});
}

export default Component;
