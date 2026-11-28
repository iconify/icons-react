import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc_3fssyj.css';
import '../../css/k/k2pxo6bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zc_3fssyj"/><path class="k2pxo6bsx primary"/></g>`,
		"fallback": "iconaut:money-bag-duotone",
	});
}

export default Component;
