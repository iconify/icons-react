import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1bspmbls.css';
import '../../css/u/uo0d8mbaa.css';
import '../../css/v/vhl0zkx6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i1bspmbls"/><path class="uo0d8mbaa"/><path class="vhl0zkx6a"/></g>`,
		"fallback": "solar:wallet-2-bold-duotone",
	});
}

export default Component;
