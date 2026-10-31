import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p31cd-z_y.css';
import '../../css/g/g9-7qlbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p31cd-z_y"/><path class="g9-7qlbdh"/></g>`,
		"fallback": "coolicons:tent-bulk-round",
	});
}

export default Component;
