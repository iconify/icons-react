import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onyi1eb3m.css';
import '../../css/m/mhz-zfunq.css';
import '../../css/p/pn30itlvh.css';
import '../../css/u/u2a5febix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="onyi1eb3m"/><path class="mhz-zfunq"/><path class="pn30itlvh"/><path class="u2a5febix"/></g>`,
		"fallback": "healthicons:microscope-with-specimen2x-outline",
	});
}

export default Component;
