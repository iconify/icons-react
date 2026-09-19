import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w_k3prmxg.css';
import '../../css/b/bd8_rbf3x.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w_k3prmxg"/><path class="bd8_rbf3x"/></g>`,
		"fallback": "si-glyph:train",
	});
}

export default Component;
