import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6bbtekgt.css';
import '../../css/p/pm5s7gdat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6bbtekgt"/><path class="pm5s7gdat"/></g>`,
		"fallback": "reicon:note-add-filled",
	});
}

export default Component;
