import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p67tv_fsk.css';
import '../../css/m/m21tmrbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p67tv_fsk"/><path class="m21tmrbes"/></g>`,
		"fallback": "reicon:key2-duotone",
	});
}

export default Component;
