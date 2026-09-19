import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ppv8sabtv.css';
import '../../css/s/swymxgbga.css';
import '../../css/a/azvt57uxv.css';
import '../../css/v/v1fljab8g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ppv8sabtv"/><path class="swymxgbga"/><path clip-rule="evenodd" class="azvt57uxv"/><path class="v1fljab8g"/></g>`,
		"fallback": "glyphs:tree-1-bold",
	});
}

export default Component;
