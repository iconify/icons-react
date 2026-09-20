import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5cxf2bnn.css';
import '../../css/k/k-zpiqb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v5cxf2bnn"/><path class="k-zpiqb1i"/></g>`,
		"fallback": "reicon:swimming-duotone",
	});
}

export default Component;
