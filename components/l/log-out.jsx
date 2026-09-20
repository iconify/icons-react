import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lcik7vbiu.css';
import '../../css/a/aoyxxgb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lcik7vbiu"/><path class="aoyxxgb3i"/></g>`,
		"fallback": "mi:log-out",
	});
}

export default Component;
