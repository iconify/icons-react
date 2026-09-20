import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huwc7bvri.css';
import '../../css/o/ohu1b7g7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="huwc7bvri"/><path clip-rule="evenodd" class="ohu1b7g7p"/></g>`,
		"fallback": "nrk:magnifying-glass-expressive",
	});
}

export default Component;
