import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pv2rdp00t.css';
import '../../css/m/mn6u8ebgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pv2rdp00t"/><path class="mn6u8ebgc"/></g>`,
		"fallback": "reicon:oven-mitts2-duotone",
	});
}

export default Component;
