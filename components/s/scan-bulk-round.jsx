import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m94b2jbdk.css';
import '../../css/x/xafc5zbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m94b2jbdk"/><path class="xafc5zbil"/></g>`,
		"fallback": "coolicons:scan-bulk-round",
	});
}

export default Component;
