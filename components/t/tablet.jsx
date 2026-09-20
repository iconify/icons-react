import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gv7hrvi9x.css';
import '../../css/k/k83ygvv2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gv7hrvi9x"/><path class="k83ygvv2n"/></g>`,
		"fallback": "mi:tablet",
	});
}

export default Component;
