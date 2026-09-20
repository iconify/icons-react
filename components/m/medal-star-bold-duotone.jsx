import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qknmikrjj.css';
import '../../css/c/c5dmlcc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qknmikrjj"/><path clip-rule="evenodd" class="c5dmlcc2t"/></g>`,
		"fallback": "solar:medal-star-bold-duotone",
	});
}

export default Component;
