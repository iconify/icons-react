import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2gc81mzo.css';
import '../../css/i/i-yz868wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r2gc81mzo"/><path class="i-yz868wn"/></g>`,
		"fallback": "solar:monitor-bold-duotone",
	});
}

export default Component;
