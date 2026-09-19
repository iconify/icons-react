import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6u6w0bcv.css';
import '../../css/p/pmuq-u-_h.css';
import '../../css/p/pgan1vb1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z6u6w0bcv"/><path class="pmuq-u-_h"/><path clip-rule="evenodd" class="pgan1vb1i"/></g>`,
		"fallback": "healthicons:intensity-concentration-bioassays2x-outline",
	});
}

export default Component;
