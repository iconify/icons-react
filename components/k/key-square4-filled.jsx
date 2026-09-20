import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvt46wzvz.css';
import '../../css/n/n-3fmgbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvt46wzvz"/><path clip-rule="evenodd" class="n-3fmgbct"/></g>`,
		"fallback": "reicon:key-square4-filled",
	});
}

export default Component;
