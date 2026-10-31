import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dji0kcbys.css';
import '../../css/e/e1ajxz96l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dji0kcbys"/><path class="e1ajxz96l"/></g>`,
		"fallback": "coolicons:traffic-light-bulk-round",
	});
}

export default Component;
