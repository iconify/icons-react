import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fry18sb9r.css';
import '../../css/p/pirfcuyed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fry18sb9r"/><path clip-rule="evenodd" class="pirfcuyed"/></g>`,
		"fallback": "healthicons:neurology-24px",
	});
}

export default Component;
