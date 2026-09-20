import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/p/pa701kpad.css';
import '../../css/r/rxjiv1uzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="doy9q4b5f"/><path class="pa701kpad"/><path class="rxjiv1uzn"/></g>`,
		"fallback": "solar:pen-new-round-bold-duotone",
	});
}

export default Component;
