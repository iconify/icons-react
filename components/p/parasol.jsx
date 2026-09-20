import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbl6qlheu.css';
import '../../css/k/kfu4t0b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mbl6qlheu"/><path clip-rule="evenodd" class="kfu4t0b8d"/></g>`,
		"fallback": "nrk:parasol",
	});
}

export default Component;
