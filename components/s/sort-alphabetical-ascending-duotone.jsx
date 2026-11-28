import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axcq7ubvg.css';
import '../../css/i/in29btpof.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axcq7ubvg"/><path class="in29btpof"/></g>`,
		"fallback": "pullo:sort-alphabetical-ascending-duotone",
	});
}

export default Component;
