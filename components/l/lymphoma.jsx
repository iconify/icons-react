import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/walizobbk.css';
import '../../css/u/uvoll-b0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="walizobbk"/><path clip-rule="evenodd" class="uvoll-b0c"/></g>`,
		"fallback": "healthicons:lymphoma",
	});
}

export default Component;
