import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljrp_rbee.css';
import '../../css/d/dujcfhblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljrp_rbee"/><path clip-rule="evenodd" class="dujcfhblc"/></g>`,
		"fallback": "reicon:password3-filled",
	});
}

export default Component;
