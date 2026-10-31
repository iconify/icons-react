import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig83ifhpq.css';
import '../../css/u/urgjmybtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ig83ifhpq"/><path class="urgjmybtl"/></g>`,
		"fallback": "coolicons:users-bulk-round",
	});
}

export default Component;
