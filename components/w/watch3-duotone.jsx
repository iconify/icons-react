import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0vt6rb9h.css';
import '../../css/s/sv39wmbxd.css';
import '../../css/q/qtrprv4bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n0vt6rb9h"/><path class="sv39wmbxd"/><path clip-rule="evenodd" class="qtrprv4bt"/></g>`,
		"fallback": "reicon:watch3-duotone",
	});
}

export default Component;
