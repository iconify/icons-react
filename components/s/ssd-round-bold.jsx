import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_5lhffkm.css';
import '../../css/r/r839paczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_5lhffkm"/><path clip-rule="evenodd" class="r839paczn"/></g>`,
		"fallback": "solar:ssd-round-bold",
	});
}

export default Component;
