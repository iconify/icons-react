import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcj0avb-b.css';
import '../../css/o/o41m46bsm.css';
import '../../css/m/mlgahkksy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dcj0avb-b"/><path class="o41m46bsm"/><path clip-rule="evenodd" class="mlgahkksy"/></g>`,
		"fallback": "solar:speaker-bold",
	});
}

export default Component;
