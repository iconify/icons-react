import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nlyy2ybwa.css';
import '../../css/r/rvkplbc6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nlyy2ybwa"/><path class="rvkplbc6b"/></g>`,
		"fallback": "gg:pull-clear",
	});
}

export default Component;
