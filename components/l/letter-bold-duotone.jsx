import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrv7kbcgv.css';
import '../../css/l/lj_xlll8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xrv7kbcgv"/><path class="lj_xlll8w"/></g>`,
		"fallback": "solar:letter-bold-duotone",
	});
}

export default Component;
