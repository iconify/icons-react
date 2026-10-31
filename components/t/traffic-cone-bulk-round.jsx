import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gho-q2b0f.css';
import '../../css/j/jlc8yivnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gho-q2b0f"/><path class="jlc8yivnf"/></g>`,
		"fallback": "coolicons:traffic-cone-bulk-round",
	});
}

export default Component;
