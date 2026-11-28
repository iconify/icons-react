import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0pmn2bda.css';
import '../../css/c/ca4d4jbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0pmn2bda secondary"/><path class="ca4d4jbkm primary"/></g>`,
		"fallback": "iconaut:sandwich-duotone",
	});
}

export default Component;
