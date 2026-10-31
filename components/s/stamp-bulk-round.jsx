import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifc9x9b7z.css';
import '../../css/y/yb-9l7bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifc9x9b7z"/><path class="yb-9l7bqm"/></g>`,
		"fallback": "coolicons:stamp-bulk-round",
	});
}

export default Component;
