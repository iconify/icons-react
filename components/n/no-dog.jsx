import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i_x_i0b1y.css';
import '../../css/p/pp4cclb1v.css';
import '../../css/g/gidacsb4d.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i_x_i0b1y"/><path class="pp4cclb1v"/><path class="gidacsb4d"/></g>`,
		"fallback": "si-glyph:no-dog",
	});
}

export default Component;
