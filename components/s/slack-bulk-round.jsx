import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k39oqmy_k.css';
import '../../css/q/qnjgpj4el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k39oqmy_k"/><path class="qnjgpj4el"/></g>`,
		"fallback": "coolicons:slack-bulk-round",
	});
}

export default Component;
