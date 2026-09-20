import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gx45t6bbw.css';
import '../../css/l/l0rliobtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gx45t6bbw"/><path clip-rule="evenodd" class="l0rliobtr"/></g>`,
		"fallback": "reicon:laptop-mobile-filled",
	});
}

export default Component;
