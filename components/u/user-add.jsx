import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5ik97bsm.css';
import '../../css/c/c4pd3lb9b.css';
import '../../css/f/f9fxuac1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c5ik97bsm"/><path class="c4pd3lb9b"/><path clip-rule="evenodd" class="f9fxuac1o"/></g>`,
		"fallback": "reicon:user-add",
	});
}

export default Component;
