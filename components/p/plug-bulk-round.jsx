import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzo4jk9yh.css';
import '../../css/e/eevg6pb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzo4jk9yh"/><path class="eevg6pb8h"/></g>`,
		"fallback": "coolicons:plug-bulk-round",
	});
}

export default Component;
