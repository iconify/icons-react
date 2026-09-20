import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyjs5fbfr.css';
import '../../css/f/fv_iub2kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyjs5fbfr"/><path clip-rule="evenodd" class="fv_iub2kb"/></g>`,
		"fallback": "nrk:picture-in-picture-exit-expressive",
	});
}

export default Component;
