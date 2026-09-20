import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbk2fsz2x.css';
import '../../css/g/gtmxuwkrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbk2fsz2x"/><path clip-rule="evenodd" class="gtmxuwkrn"/></g>`,
		"fallback": "reicon:mic-filled",
	});
}

export default Component;
