import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qql4jfbkh.css';
import '../../css/f/fpcyk-8rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qql4jfbkh"/><path class="fpcyk-8rm"/></g>`,
		"fallback": "reicon:square-arrow-right-up-duotone",
	});
}

export default Component;
