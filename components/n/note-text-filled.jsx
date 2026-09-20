import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-oge3sxn.css';
import '../../css/n/nzvi4cb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e-oge3sxn"/><path class="nzvi4cb3h"/></g>`,
		"fallback": "reicon:note-text-filled",
	});
}

export default Component;
