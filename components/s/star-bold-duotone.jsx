import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7-j30btt.css';
import '../../css/o/oh_s9nbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7-j30btt"/><path class="oh_s9nbuf"/></g>`,
		"fallback": "solar:star-bold-duotone",
	});
}

export default Component;
