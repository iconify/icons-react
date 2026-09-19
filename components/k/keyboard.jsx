import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/af_fm9b1l.css';
import '../../css/m/mz87cubvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="af_fm9b1l"/><path clip-rule="evenodd" class="mz87cubvq"/></g>`,
		"fallback": "gg:keyboard",
	});
}

export default Component;
