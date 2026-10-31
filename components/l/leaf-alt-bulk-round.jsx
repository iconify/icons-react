import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vsseiwmhu.css';
import '../../css/r/r5asrqbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vsseiwmhu"/><path class="r5asrqbem"/></g>`,
		"fallback": "coolicons:leaf-alt-bulk-round",
	});
}

export default Component;
