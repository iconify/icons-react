import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckmgcgbyf.css';
import '../../css/b/bv7hbwbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ckmgcgbyf"/><path class="bv7hbwbgs"/></g>`,
		"fallback": "reicon:mortarboard-square2",
	});
}

export default Component;
