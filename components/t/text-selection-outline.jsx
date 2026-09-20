import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqy0pxyll.css';
import '../../css/u/uk12bvmde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aqy0pxyll"/><path clip-rule="evenodd" class="uk12bvmde"/></g>`,
		"fallback": "solar:text-selection-outline",
	});
}

export default Component;
