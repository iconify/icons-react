import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm40z8n3v.css';
import '../../css/j/j0s5_rbqo.css';
import '../../css/p/pv_i1jaoc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rm40z8n3v"/><path clip-rule="evenodd" class="j0s5_rbqo"/><path clip-rule="evenodd" class="pv_i1jaoc"/></g>`,
		"fallback": "pepicons:photo-camera-print",
	});
}

export default Component;
