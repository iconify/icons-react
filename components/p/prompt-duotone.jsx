import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w23ioe_3p.css';
import '../../css/p/pd-wignci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w23ioe_3p"/><path class="pd-wignci primary"/></g>`,
		"fallback": "iconaut:prompt-duotone",
	});
}

export default Component;
