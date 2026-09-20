import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f5wtdab5u.css';
import '../../css/l/lwql3db3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f5wtdab5u"/><path class="lwql3db3b"/></g>`,
		"fallback": "solar:muted-bold",
	});
}

export default Component;
