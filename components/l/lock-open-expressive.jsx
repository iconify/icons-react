import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb9wpjz4j.css';
import '../../css/x/xuphuebic.css';
import '../../css/p/psjfuytyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mb9wpjz4j"/><path clip-rule="evenodd" class="xuphuebic"/><path class="psjfuytyu"/></g>`,
		"fallback": "nrk:lock-open-expressive",
	});
}

export default Component;
