import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2y8knb6g.css';
import '../../css/o/obcwc6b8h.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l2y8knb6g"/><path class="obcwc6b8h"/></g>`,
		"fallback": "si-glyph:magnifier",
	});
}

export default Component;
