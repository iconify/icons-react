import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o41m46bsm.css';
import '../../css/t/ts6gkp4gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o41m46bsm"/><path clip-rule="evenodd" class="ts6gkp4gf"/></g>`,
		"fallback": "solar:remote-controller-2-bold",
	});
}

export default Component;
