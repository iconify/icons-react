import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldkzohn1g.css';
import '../../css/u/ut517xzqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ldkzohn1g"/><path clip-rule="evenodd" class="ut517xzqh"/></g>`,
		"fallback": "nrk:speech-bubble-line",
	});
}

export default Component;
