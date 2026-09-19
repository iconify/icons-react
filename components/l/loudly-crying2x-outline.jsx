import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd-s4vbpt.css';
import '../../css/u/uzp8_bcvb.css';
import '../../css/i/ikr5ohbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd-s4vbpt"/><path class="uzp8_bcvb"/><path clip-rule="evenodd" class="ikr5ohbyg"/></g>`,
		"fallback": "healthicons:loudly-crying2x-outline",
	});
}

export default Component;
