import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5-sadc_h.css';
import '../../css/l/lodbygb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w5-sadc_h"/><path class="lodbygb7u"/></g>`,
		"fallback": "coolicons:reddit-bulk-round",
	});
}

export default Component;
