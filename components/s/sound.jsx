import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfxngabua.css';
import '../../css/s/syuwirbva.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe_p2ybfu.css';
import '../../css/z/zwsgkpb8c.css';
import '../../css/d/d4cn7bb1x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfxngabua"/><path class="syuwirbva"/><g class="cuyn6tgcc"><path class="fe_p2ybfu"/><path class="zwsgkpb8c"/><path class="d4cn7bb1x"/></g>`,
		"fallback": "foundation:sound",
	});
}

export default Component;
