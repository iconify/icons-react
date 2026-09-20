import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmm733tco.css';
import '../../css/r/rwzi9g3uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wmm733tco"/><path class="rwzi9g3uh"/></g>`,
		"fallback": "mynaui:map-pin-plus-solid",
	});
}

export default Component;
