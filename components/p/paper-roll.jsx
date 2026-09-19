import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ra5po4-js.css';
import '../../css/c/cqgkojblt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ra5po4-js"/><path class="cqgkojblt"/></g>`,
		"fallback": "si-glyph:paper-roll",
	});
}

export default Component;
