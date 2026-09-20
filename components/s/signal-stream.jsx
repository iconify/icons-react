import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tobmkjx4s.css';
import '../../css/b/bb602ybpl.css';
import '../../css/o/o-ezxobzr.css';
import '../../css/o/oc5c_p17s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tobmkjx4s"/><path clip-rule="evenodd" class="bb602ybpl"/><path class="o-ezxobzr"/><path class="oc5c_p17s"/></g>`,
		"fallback": "reicon:signal-stream",
	});
}

export default Component;
