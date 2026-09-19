import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2n52m2ay.css';
import '../../css/v/v62dl3deq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2n52m2ay"/><path clip-rule="evenodd" class="v62dl3deq"/></g>`,
		"fallback": "gg:twilio",
	});
}

export default Component;
