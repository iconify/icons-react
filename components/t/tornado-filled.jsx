import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uc3p9vbxr.css';
import '../../css/l/ld6w58bwc.css';
import '../../css/h/h31q7tb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uc3p9vbxr"/><path class="ld6w58bwc"/><path clip-rule="evenodd" class="h31q7tb1w"/></g>`,
		"fallback": "reicon:tornado-filled",
	});
}

export default Component;
