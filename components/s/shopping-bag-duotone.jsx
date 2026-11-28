import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9juzr-vt.css';
import '../../css/m/m4w4usnph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9juzr-vt secondary"/><path class="m4w4usnph primary"/></g>`,
		"fallback": "iconaut:shopping-bag-duotone",
	});
}

export default Component;
