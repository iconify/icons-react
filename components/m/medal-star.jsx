import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y5ak_20vt.css';
import '../../css/u/u_14_ac_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y5ak_20vt"/><path class="u_14_ac_a"/></g>`,
		"fallback": "si-glyph:medal-star",
	});
}

export default Component;
