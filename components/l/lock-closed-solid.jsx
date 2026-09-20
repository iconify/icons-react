import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7oujg-ll.css';
import '../../css/t/t9-6z1fif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q7oujg-ll"/><path class="t9-6z1fif"/></g>`,
		"fallback": "nrk:lock-closed-solid",
	});
}

export default Component;
