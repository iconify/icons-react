import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzxzyxnbb.css';
import '../../css/n/n4en7dbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vzxzyxnbb"/><path class="n4en7dbvr"/></g>`,
		"fallback": "solar:playlist-bold-duotone",
	});
}

export default Component;
