import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmymti-fw.css';
import '../../css/t/tzexjacdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmymti-fw secondary"/><path class="primary tzexjacdv"/></g>`,
		"fallback": "iconaut:wardrobe-duotone",
	});
}

export default Component;
