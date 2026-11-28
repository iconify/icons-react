import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap_z64y2m.css';
import '../../css/b/b-drr0hst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ap_z64y2m secondary"/><path class="b-drr0hst primary"/></g>`,
		"fallback": "iconaut:linkedin-duotone",
	});
}

export default Component;
