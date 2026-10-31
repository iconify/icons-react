import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d37bamu3h.css';
import '../../css/b/b3lapab3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d37bamu3h"/><path class="b3lapab3s"/></g>`,
		"fallback": "coolicons:train-bulk-round",
	});
}

export default Component;
