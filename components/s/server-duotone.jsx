import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbke7ms9x.css';
import '../../css/m/m20g76bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbke7ms9x"/><path class="m20g76bsy"/></g>`,
		"fallback": "reicon:server-duotone",
	});
}

export default Component;
