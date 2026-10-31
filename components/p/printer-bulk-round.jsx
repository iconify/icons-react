import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qk8aco53k.css';
import '../../css/x/xtoviob-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qk8aco53k"/><path class="xtoviob-l"/></g>`,
		"fallback": "coolicons:printer-bulk-round",
	});
}

export default Component;
