import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-nlohi9v.css';
import '../../css/u/uj99hl-mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-nlohi9v"/><path clip-rule="evenodd" class="uj99hl-mw"/></g>`,
		"fallback": "reicon:pin-wave-filled",
	});
}

export default Component;
