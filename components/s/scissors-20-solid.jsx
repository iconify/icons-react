import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz49g9b3t.css';
import '../../css/u/u68zubc3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rz49g9b3t"/><path class="u68zubc3j"/></g>`,
		"fallback": "heroicons:scissors-20-solid",
	});
}

export default Component;
