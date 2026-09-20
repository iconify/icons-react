import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exn_fx67o.css';
import '../../css/u/ujonfg6py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="exn_fx67o"/><path class="ujonfg6py"/></g>`,
		"fallback": "reicon:podcast-filled",
	});
}

export default Component;
