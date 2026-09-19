import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-7ntbbsq.css';
import '../../css/o/o3y3tbbxo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-7ntbbsq"/><path class="o3y3tbbxo"/></g>`,
		"fallback": "at-icons:recover",
	});
}

export default Component;
