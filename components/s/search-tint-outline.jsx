import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptk67nbuj.css';
import '../../css/q/qxpfaf6dk.css';
import '../../css/q/qle0cdbgv.css';
import '../../css/e/e0i688bvf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptk67nbuj"/><path clip-rule="evenodd" class="qxpfaf6dk"/><path class="qle0cdbgv"/><path clip-rule="evenodd" class="e0i688bvf"/></g>`,
		"fallback": "glyphs:search-tint-outline",
	});
}

export default Component;
