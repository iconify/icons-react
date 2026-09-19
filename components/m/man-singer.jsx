import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6b_15jxn.css';
import '../../css/t/t-xc6q1si.css';
import '../../css/q/qqys3bb_x.css';
import '../../css/z/z1nm9ccxf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6b_15jxn"/><path class="t-xc6q1si"/><path class="qqys3bb_x"/><path class="z1nm9ccxf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-singer",
	});
}

export default Component;
