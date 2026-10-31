import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwfa76uss.css';
import '../../css/j/jf11dvboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwfa76uss"/><path class="jf11dvboh"/></g>`,
		"fallback": "coolicons:sunrise-bulk-round",
	});
}

export default Component;
