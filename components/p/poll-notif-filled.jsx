import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oaoh11btl.css';
import '../../css/k/koj8qzh0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oaoh11btl"/><path clip-rule="evenodd" class="koj8qzh0l"/></g>`,
		"fallback": "reicon:poll-notif-filled",
	});
}

export default Component;
