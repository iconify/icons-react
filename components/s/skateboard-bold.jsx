import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7fhajigd.css';
import '../../css/l/lp6b5iboh.css';
import '../../css/f/fl08_4b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i7fhajigd"/><path class="lp6b5iboh"/><path class="fl08_4b0x"/></g>`,
		"fallback": "solar:skateboard-bold",
	});
}

export default Component;
