import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnlmbe81s.css';
import '../../css/y/yu1ky3bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pnlmbe81s"/><path clip-rule="evenodd" class="yu1ky3bap"/></g>`,
		"fallback": "nrk:speech-bubble-subtitles-expressive",
	});
}

export default Component;
