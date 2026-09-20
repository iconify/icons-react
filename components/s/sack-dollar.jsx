import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7t0tiboy.css';
import '../../css/v/veh2i_bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7t0tiboy"/><path clip-rule="evenodd" class="veh2i_bto"/></g>`,
		"fallback": "reicon:sack-dollar",
	});
}

export default Component;
