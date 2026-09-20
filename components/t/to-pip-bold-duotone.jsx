import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxs5opefl.css';
import '../../css/p/p35oimbbv.css';
import '../../css/q/qrk41hb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxs5opefl"/><path class="p35oimbbv"/><path class="qrk41hb3l"/></g>`,
		"fallback": "solar:to-pip-bold-duotone",
	});
}

export default Component;
