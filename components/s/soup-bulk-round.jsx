import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtdkvv6kf.css';
import '../../css/t/t9qmpugdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtdkvv6kf"/><path class="t9qmpugdp"/></g>`,
		"fallback": "coolicons:soup-bulk-round",
	});
}

export default Component;
