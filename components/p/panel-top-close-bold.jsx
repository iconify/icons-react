import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_0140bsn.css';
import '../../css/p/pr4m3-bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z_0140bsn"/><path class="pr4m3-bqy"/></g>`,
		"fallback": "solar:panel-top-close-bold",
	});
}

export default Component;
