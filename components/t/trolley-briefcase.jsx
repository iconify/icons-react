import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0cnw74gn.css';
import '../../css/j/j0nrwubnn.css';
import '../../css/c/cah5o1biu.css';
import '../../css/r/renz17btl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="b0cnw74gn"/><circle class="j0nrwubnn"/><path class="cah5o1biu"/><path class="renz17btl"/></g>`,
		"fallback": "si-glyph:trolley-briefcase",
	});
}

export default Component;
