import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lq9jk7bis.css';
import '../../css/q/qcq1wlbmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lq9jk7bis"/><path class="qcq1wlbmd"/></g>`,
		"fallback": "si-glyph:person-checked",
	});
}

export default Component;
