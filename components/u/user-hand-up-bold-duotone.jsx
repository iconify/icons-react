import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qh2myqjkb.css';
import '../../css/s/s6mbmusbv.css';
import '../../css/s/sm0skf1-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qh2myqjkb"/><path class="s6mbmusbv"/><path class="sm0skf1-z"/></g>`,
		"fallback": "solar:user-hand-up-bold-duotone",
	});
}

export default Component;
