import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epure1bbm.css';
import '../../css/x/x5z38rbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epure1bbm"/><path clip-rule="evenodd" class="x5z38rbet"/></g>`,
		"fallback": "gg:vinyl",
	});
}

export default Component;
