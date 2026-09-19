import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/evl2mxjzg.css';
import '../../css/m/mj_4jsyjn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="evl2mxjzg"/><path class="mj_4jsyjn"/></g>`,
		"fallback": "si-glyph:wallet",
	});
}

export default Component;
