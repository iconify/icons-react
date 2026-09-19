import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lhti6p55o.css';
import '../../css/k/kdw727bvn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lhti6p55o"/><path class="kdw727bvn"/></g>`,
		"fallback": "si-glyph:resize-out-frame",
	});
}

export default Component;
