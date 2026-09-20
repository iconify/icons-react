import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/re811lpkr.css';
import '../../css/c/cl-6xabrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="re811lpkr"/><path clip-rule="evenodd" class="cl-6xabrp"/></g>`,
		"fallback": "reicon:subtitles",
	});
}

export default Component;
