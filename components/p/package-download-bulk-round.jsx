import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozzv6mtrh.css';
import '../../css/f/fjzmle77m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozzv6mtrh"/><path class="fjzmle77m"/></g>`,
		"fallback": "coolicons:package-download-bulk-round",
	});
}

export default Component;
