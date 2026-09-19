import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxh34dbkk.css';
import '../../css/g/gx7_0oe9s.css';
import '../../css/t/tfa_rob_w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cxh34dbkk"/><path class="gx7_0oe9s"/><path class="tfa_rob_w"/></g>`,
		"fallback": "pepicons:television",
	});
}

export default Component;
