import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1bi4h1zy.css';
import '../../css/c/c0_gkmblh.css';
import '../../css/c/c9974hb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1bi4h1zy"/><path clip-rule="evenodd" class="c0_gkmblh"/><path class="c9974hb_t"/></g>`,
		"fallback": "solar:running-2-bold-duotone",
	});
}

export default Component;
