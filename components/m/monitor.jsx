import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vv5h-96aa.css';
import '../../css/y/y7wod1b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vv5h-96aa"/><path clip-rule="evenodd" class="y7wod1b-n"/></g>`,
		"fallback": "nrk:monitor",
	});
}

export default Component;
