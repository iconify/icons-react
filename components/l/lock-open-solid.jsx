import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7oujg-ll.css';
import '../../css/k/k-t1wxmlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q7oujg-ll"/><path class="k-t1wxmlt"/></g>`,
		"fallback": "nrk:lock-open-solid",
	});
}

export default Component;
