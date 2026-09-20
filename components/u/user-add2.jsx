import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5ik97bsm.css';
import '../../css/i/ihebqlels.css';
import '../../css/z/z9bpx178d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c5ik97bsm"/><path class="ihebqlels"/><path clip-rule="evenodd" class="z9bpx178d"/></g>`,
		"fallback": "reicon:user-add2",
	});
}

export default Component;
