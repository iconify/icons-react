import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9nejwh1b.css';
import '../../css/p/pu4dtwbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m9nejwh1b"/><path clip-rule="evenodd" class="pu4dtwbpm"/></g>`,
		"fallback": "nrk:magnifying-glass-strong-expressive",
	});
}

export default Component;
