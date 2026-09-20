import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iu1frvbob.css';
import '../../css/j/jo0cacbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iu1frvbob"/><path clip-rule="evenodd" class="jo0cacbug"/></g>`,
		"fallback": "solar:screen-share-bold-duotone",
	});
}

export default Component;
