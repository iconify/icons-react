import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6bbtekgt.css';
import '../../css/s/s-15pkbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6bbtekgt"/><path class="s-15pkbsn"/></g>`,
		"fallback": "reicon:note-filled",
	});
}

export default Component;
