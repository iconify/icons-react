import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ud70w6wcd.css';
import '../../css/n/nxxkiebtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ud70w6wcd"/><path class="nxxkiebtj"/></g>`,
		"fallback": "coolicons:rabbit-bulk-round",
	});
}

export default Component;
