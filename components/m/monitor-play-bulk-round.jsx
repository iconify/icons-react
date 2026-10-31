import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r889qqats.css';
import '../../css/x/xtuit9bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r889qqats"/><path class="xtuit9bbs"/></g>`,
		"fallback": "coolicons:monitor-play-bulk-round",
	});
}

export default Component;
