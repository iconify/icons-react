import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qrgik876e.css';
import '../../css/j/j6fnzbcow.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qrgik876e"/><path class="j6fnzbcow"/></g>`,
		"fallback": "si-glyph:roller",
	});
}

export default Component;
