import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/occ66bcrt.css';
import '../../css/a/avgno0bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="occ66bcrt"/><path clip-rule="evenodd" class="avgno0bde"/></g>`,
		"fallback": "reicon:phone-ring2",
	});
}

export default Component;
