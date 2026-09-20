import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1ve95bkc.css';
import '../../css/y/ymrtzacyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1ve95bkc"/><path class="ymrtzacyi"/></g>`,
		"fallback": "pixelarticons:square-dashed-cursor-sharp",
	});
}

export default Component;
