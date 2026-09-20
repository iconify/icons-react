import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anhkjmhdr.css';
import '../../css/t/tsmsgvb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="anhkjmhdr"/><path clip-rule="evenodd" class="tsmsgvb0c"/></g>`,
		"fallback": "nrk:printer-expressive",
	});
}

export default Component;
