import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_chcnbrk.css';
import '../../css/s/su39-7f4f.css';
import '../../css/a/at1ai5bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_chcnbrk"/><path class="su39-7f4f"/><path clip-rule="evenodd" class="at1ai5bbb"/></g>`,
		"fallback": "reicon:trash3-duotone",
	});
}

export default Component;
