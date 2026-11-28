import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9-eb3btl.css';
import '../../css/s/smfe7ybgl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9-eb3btl"/><path class="smfe7ybgl"/></g>`,
		"fallback": "pullo:line-height-duotone",
	});
}

export default Component;
