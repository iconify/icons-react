import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmo08jn0t.css';
import '../../css/t/t6w8uogfv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmo08jn0t"/><path clip-rule="evenodd" class="t6w8uogfv"/></g>`,
		"fallback": "at-icons:panda",
	});
}

export default Component;
