import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxv44pbef.css';
import '../../css/j/jr8aifbqs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxv44pbef"/><path class="jr8aifbqs"/></g>`,
		"fallback": "codicon:mic-download-compact",
	});
}

export default Component;
