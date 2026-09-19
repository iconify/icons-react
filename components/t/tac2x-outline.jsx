import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvn4iv5gn.css';
import '../../css/x/xj__jfbkl.css';
import '../../css/q/qh4vdvbdt.css';
import '../../css/t/tnpn9fbkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvn4iv5gn"/><path clip-rule="evenodd" class="xj__jfbkl"/><path clip-rule="evenodd" class="qh4vdvbdt"/><path class="tnpn9fbkr"/></g>`,
		"fallback": "healthicons:tac2x-outline",
	});
}

export default Component;
