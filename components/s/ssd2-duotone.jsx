import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/py-kw649y.css';
import '../../css/l/l2uwti0uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="py-kw649y"/><path clip-rule="evenodd" class="l2uwti0uj"/></g>`,
		"fallback": "reicon:ssd2-duotone",
	});
}

export default Component;
