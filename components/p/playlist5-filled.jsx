import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9qshvlpv.css';
import '../../css/k/k3mwbtbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d9qshvlpv"/><path class="k3mwbtbiv"/></g>`,
		"fallback": "reicon:playlist5-filled",
	});
}

export default Component;
