import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyta0kxfq.css';
import '../../css/l/lfxipybne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xyta0kxfq"/><path class="lfxipybne"/></g>`,
		"fallback": "coolicons:warehouse-bulk-round",
	});
}

export default Component;
