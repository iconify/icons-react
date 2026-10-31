import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvdc0tbda.css';
import '../../css/h/hyyoeff1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvdc0tbda"/><path class="hyyoeff1b"/></g>`,
		"fallback": "coolicons:spell-check-bulk-round",
	});
}

export default Component;
