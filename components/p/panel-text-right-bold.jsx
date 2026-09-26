import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xd_59obek.css';
import '../../css/v/vdlt8ccja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xd_59obek"/><path clip-rule="evenodd" class="vdlt8ccja"/></g>`,
		"fallback": "solar:panel-text-right-bold",
	});
}

export default Component;
