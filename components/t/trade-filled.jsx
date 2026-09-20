import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqvcc2bxc.css';
import '../../css/t/tbq3rzb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqvcc2bxc"/><path class="tbq3rzb0g"/></g>`,
		"fallback": "reicon:trade-filled",
	});
}

export default Component;
