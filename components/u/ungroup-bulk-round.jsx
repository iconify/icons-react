import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp76l5bgd.css';
import '../../css/b/b5_jfabhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zp76l5bgd"/><path class="b5_jfabhs"/></g>`,
		"fallback": "coolicons:ungroup-bulk-round",
	});
}

export default Component;
