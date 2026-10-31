import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm2kcpb5y.css';
import '../../css/e/ebkakui0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gm2kcpb5y"/><path class="ebkakui0m"/></g>`,
		"fallback": "coolicons:sparkles-alt-bulk-round",
	});
}

export default Component;
