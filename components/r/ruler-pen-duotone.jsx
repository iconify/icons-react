import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejo52khxn.css';
import '../../css/h/hmwu_nbej.css';
import '../../css/h/hlmlrw03c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejo52khxn"/><path class="hmwu_nbej"/><path class="hlmlrw03c"/></g>`,
		"fallback": "reicon:ruler-pen-duotone",
	});
}

export default Component;
