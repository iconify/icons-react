import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgp65gnit.css';
import '../../css/l/lv2153twu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgp65gnit"/><path class="lv2153twu"/></g>`,
		"fallback": "coolicons:slider-2-bulk-round",
	});
}

export default Component;
