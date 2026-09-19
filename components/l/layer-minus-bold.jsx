import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p11yxdbta.css';
import '../../css/x/xyb8xnbmc.css';
import '../../css/o/o-u2n4izs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p11yxdbta"/><path class="xyb8xnbmc"/><path class="o-u2n4izs"/></g>`,
		"fallback": "glyphs:layer-minus-bold",
	});
}

export default Component;
