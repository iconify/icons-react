import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki5efeb2l.css';
import '../../css/q/qxssknb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki5efeb2l"/><path class="qxssknb4n"/></g>`,
		"fallback": "coolicons:road-bulk-round",
	});
}

export default Component;
