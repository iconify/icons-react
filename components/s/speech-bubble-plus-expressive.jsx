import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3j9bihfo.css';
import '../../css/y/yhia-2vwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3j9bihfo"/><path class="yhia-2vwu"/></g>`,
		"fallback": "nrk:speech-bubble-plus-expressive",
	});
}

export default Component;
