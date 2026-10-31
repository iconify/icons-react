import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm39oqpfh.css';
import '../../css/w/wsry58p4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rm39oqpfh"/><path class="wsry58p4i"/></g>`,
		"fallback": "coolicons:row-plus-bulk-round",
	});
}

export default Component;
