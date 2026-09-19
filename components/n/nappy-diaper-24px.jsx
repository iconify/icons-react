import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n5xxgzzql.css';
import '../../css/v/vwpwn9onq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n5xxgzzql"/><path class="vwpwn9onq"/></g>`,
		"fallback": "healthicons:nappy-diaper-24px",
	});
}

export default Component;
