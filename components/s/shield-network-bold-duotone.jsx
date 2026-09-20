import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/intwh9bdc.css';
import '../../css/j/jgissg6hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="intwh9bdc"/><path clip-rule="evenodd" class="jgissg6hq"/></g>`,
		"fallback": "solar:shield-network-bold-duotone",
	});
}

export default Component;
