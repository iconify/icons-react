import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j578lgctx.css';
import '../../css/c/c2lo1vbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j578lgctx"/><path class="c2lo1vbgf"/></g>`,
		"fallback": "reicon:presention-chart-filled",
	});
}

export default Component;
