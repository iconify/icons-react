import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rygzlfbmy.css';
import '../../css/t/topkzebac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rygzlfbmy"/><path class="topkzebac"/></g>`,
		"fallback": "coolicons:store-bulk-round",
	});
}

export default Component;
