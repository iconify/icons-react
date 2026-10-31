import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xie749m9p.css';
import '../../css/r/romy48bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xie749m9p"/><path class="romy48bvi"/></g>`,
		"fallback": "coolicons:palette-bulk-round",
	});
}

export default Component;
