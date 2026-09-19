import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctt4afbpl.css';
import '../../css/r/rjlz1ycng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ctt4afbpl"/><path class="rjlz1ycng"/></g>`,
		"fallback": "at-icons:target",
	});
}

export default Component;
