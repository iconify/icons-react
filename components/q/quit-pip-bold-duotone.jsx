import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxs5opefl.css';
import '../../css/n/nz68zmbgk.css';
import '../../css/x/x26m7ubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxs5opefl"/><path class="nz68zmbgk"/><path class="x26m7ubbd"/></g>`,
		"fallback": "solar:quit-pip-bold-duotone",
	});
}

export default Component;
