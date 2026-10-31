import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ww1io6bum.css';
import '../../css/g/gxesbv2vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ww1io6bum"/><path class="gxesbv2vg"/></g>`,
		"fallback": "coolicons:library-bulk-round",
	});
}

export default Component;
