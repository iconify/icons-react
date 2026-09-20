import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g800-kbwc.css';
import '../../css/v/vl3-ksbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g800-kbwc"/><path clip-rule="evenodd" class="vl3-ksbxm"/></g>`,
		"fallback": "nrk:unlock",
	});
}

export default Component;
