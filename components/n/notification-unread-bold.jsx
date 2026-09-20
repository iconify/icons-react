import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geh9nob_w.css';
import '../../css/j/ja_0od71p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geh9nob_w"/><path class="ja_0od71p"/></g>`,
		"fallback": "solar:notification-unread-bold",
	});
}

export default Component;
