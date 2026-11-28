import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv08l9b3p.css';
import '../../css/c/csx5c8b3j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iv08l9b3p"/><path class="csx5c8b3j"/></g>`,
		"fallback": "pullo:table-of-contents-duotone",
	});
}

export default Component;
