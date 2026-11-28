import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4uc0_dzi.css';
import '../../css/s/s_mizbccq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s4uc0_dzi secondary"/><path class="primary s_mizbccq"/></g>`,
		"fallback": "iconaut:palette-duotone",
	});
}

export default Component;
