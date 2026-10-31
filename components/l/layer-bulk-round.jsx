import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0xm9xv2t.css';
import '../../css/v/v23z8imjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t0xm9xv2t"/><path class="v23z8imjm"/></g>`,
		"fallback": "coolicons:layer-bulk-round",
	});
}

export default Component;
