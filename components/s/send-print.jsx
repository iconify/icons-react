import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhwzu4b0a.css';
import '../../css/t/tumqksvsx.css';
import '../../css/u/u_7ve-3cq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qhwzu4b0a"/><path clip-rule="evenodd" class="tumqksvsx"/><path class="u_7ve-3cq"/></g>`,
		"fallback": "pepicons:send-print",
	});
}

export default Component;
