import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hid88aciw.css';
import '../../css/o/opnmaubcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hid88aciw secondary"/><path class="opnmaubcq primary"/></g>`,
		"fallback": "iconaut:pine-tree-duotone",
	});
}

export default Component;
