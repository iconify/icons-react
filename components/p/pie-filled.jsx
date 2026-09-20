import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emhvahb-q.css';
import '../../css/a/axz_vbcth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="emhvahb-q"/><path class="axz_vbcth"/></g>`,
		"fallback": "reicon:pie-filled",
	});
}

export default Component;
