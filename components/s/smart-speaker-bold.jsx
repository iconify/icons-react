import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxm4exb-m.css';
import '../../css/o/o1kkk1b6e.css';
import '../../css/h/h8wwunb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oxm4exb-m"/><path class="o1kkk1b6e"/><path class="h8wwunb3w"/></g>`,
		"fallback": "solar:smart-speaker-bold",
	});
}

export default Component;
