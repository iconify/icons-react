import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w68dq2bht.css';
import '../../css/y/ypqex4f3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w68dq2bht"/><path class="ypqex4f3c"/></g>`,
		"fallback": "coolicons:summarize-bulk-round",
	});
}

export default Component;
