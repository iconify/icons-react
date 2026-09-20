import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr_co9bxk.css';
import '../../css/n/n212wqbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr_co9bxk"/><path class="n212wqbua"/></g>`,
		"fallback": "solar:mirror-2-bold-duotone",
	});
}

export default Component;
