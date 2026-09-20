import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g14dc2b4f.css';
import '../../css/t/tj0b97bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g14dc2b4f"/><path class="tj0b97bmc"/></g>`,
		"fallback": "solar:playlist-minimalistic-3-bold",
	});
}

export default Component;
