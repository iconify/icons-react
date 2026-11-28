import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-tj33blo.css';
import '../../css/w/wqnu2exmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u-tj33blo"/><path class="primary wqnu2exmr"/></g>`,
		"fallback": "iconaut:ruler-duotone",
	});
}

export default Component;
