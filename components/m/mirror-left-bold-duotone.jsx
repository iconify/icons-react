import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smhkd1bxn.css';
import '../../css/i/irxb_0ruw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smhkd1bxn"/><path clip-rule="evenodd" class="irxb_0ruw"/></g>`,
		"fallback": "solar:mirror-left-bold-duotone",
	});
}

export default Component;
