import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yem39_jre.css';
import '../../css/w/wv7xtmdpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yem39_jre"/><path class="wv7xtmdpy"/></g>`,
		"fallback": "coolicons:waves-bulk-round",
	});
}

export default Component;
