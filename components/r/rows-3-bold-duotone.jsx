import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlyj1gbrg.css';
import '../../css/b/byfp5ac-b.css';
import '../../css/d/d154x6hxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlyj1gbrg"/><path class="byfp5ac-b"/><path class="d154x6hxs"/></g>`,
		"fallback": "solar:rows-3-bold-duotone",
	});
}

export default Component;
