import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3ndfy7qu.css';
import '../../css/x/xcdktibdc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3ndfy7qu"/><path class="xcdktibdc"/></g>`,
		"fallback": "glyphs:replay-bold",
	});
}

export default Component;
