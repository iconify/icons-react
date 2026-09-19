import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/exlfgim7i.css';
import '../../css/y/y_ag9vb7d.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="exlfgim7i"/><path class="y_ag9vb7d"/></g>`,
		"fallback": "si-glyph:turn-off",
	});
}

export default Component;
