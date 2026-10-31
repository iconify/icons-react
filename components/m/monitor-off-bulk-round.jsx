import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luvn0zfzk.css';
import '../../css/n/n2tzskgxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="luvn0zfzk"/><path class="n2tzskgxj"/></g>`,
		"fallback": "coolicons:monitor-off-bulk-round",
	});
}

export default Component;
