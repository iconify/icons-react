import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ksjg_ccnr.css';
import '../../css/r/r66u58wsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ksjg_ccnr"/><path class="r66u58wsc"/></g>`,
		"fallback": "iconaut:ring",
	});
}

export default Component;
