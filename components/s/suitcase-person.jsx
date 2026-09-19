import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-1sctb2h.css';
import '../../css/p/pulbykzuj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g-1sctb2h"/><path class="pulbykzuj"/></g>`,
		"fallback": "si-glyph:suitcase-person",
	});
}

export default Component;
