import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn5c_ac-c.css';
import '../../css/a/a71n0cp7w.css';
import '../../css/n/nvedv7b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn5c_ac-c"/><path class="a71n0cp7w"/><path class="nvedv7b7x"/></g>`,
		"fallback": "majesticons:truck-line",
	});
}

export default Component;
