import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wg4_nqeyw.css';
import '../../css/w/wzyb7sccb.css';
import '../../css/n/nt6hy5b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wg4_nqeyw"/><path clip-rule="evenodd" class="wzyb7sccb"/><path class="nt6hy5b_b"/></g>`,
		"fallback": "reicon:streets-pin-filled",
	});
}

export default Component;
