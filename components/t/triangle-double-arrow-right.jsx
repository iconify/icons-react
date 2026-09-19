import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qh1hhtown.css';
import '../../css/s/san_b9rep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qh1hhtown"/><path class="san_b9rep"/></g>`,
		"fallback": "si-glyph:triangle-double-arrow-right",
	});
}

export default Component;
