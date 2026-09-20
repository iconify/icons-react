import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrrpa-lbs.css';
import '../../css/e/esnicxbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qrrpa-lbs"/><path clip-rule="evenodd" class="esnicxbdj"/></g>`,
		"fallback": "solar:logout-3-outline",
	});
}

export default Component;
