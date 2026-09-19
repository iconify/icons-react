import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0uc6wbmd.css';
import '../../css/c/c-vno9b3b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d0uc6wbmd"/><path class="c-vno9b3b"/></g>`,
		"fallback": "si-glyph:microphone-1",
	});
}

export default Component;
