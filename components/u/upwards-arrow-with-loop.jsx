import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fuqqubc1t.css';
import '../../css/b/b50o_nw1f.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fuqqubc1t"/><path class="b50o_nw1f"/></g>`,
		"fallback": "si-glyph:upwards-arrow-with-loop",
	});
}

export default Component;
