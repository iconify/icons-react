import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ealwxr77b.css';
import '../../css/h/hjrj_fbxo.css';
import '../../css/q/qx29q2bfr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ealwxr77b"/><path class="hjrj_fbxo"/><path clip-rule="evenodd" class="qx29q2bfr"/></g>`,
		"fallback": "glyphs-poly:scroll-old",
	});
}

export default Component;
