import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/juxav7bvk.css';
import '../../css/s/srpvt52_n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="juxav7bvk"/><path class="srpvt52_n"/></g>`,
		"fallback": "glyphs:spa-bold",
	});
}

export default Component;
