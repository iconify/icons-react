import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ic7q8ab1x.css';
import '../../css/b/bdk_c1bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ic7q8ab1x"/><path clip-rule="evenodd" class="bdk_c1bht"/></g>`,
		"fallback": "reicon:menu-square",
	});
}

export default Component;
