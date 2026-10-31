import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fw86-bbfx.css';
import '../../css/c/cshoulbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fw86-bbfx"/><path class="cshoulbrv"/></g>`,
		"fallback": "coolicons:repeat-one-bulk-round",
	});
}

export default Component;
