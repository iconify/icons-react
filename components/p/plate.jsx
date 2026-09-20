import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wc4hlc93o.css';
import '../../css/o/owownebqn.css';
import '../../css/u/ubbj1pldi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wc4hlc93o"/><path class="owownebqn"/><path class="ubbj1pldi"/></g>`,
		"fallback": "reicon:plate",
	});
}

export default Component;
