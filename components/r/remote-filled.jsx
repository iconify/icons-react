import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljs4j84fn.css';
import '../../css/i/i845ftd1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljs4j84fn"/><path clip-rule="evenodd" class="i845ftd1b"/></g>`,
		"fallback": "reicon:remote-filled",
	});
}

export default Component;
