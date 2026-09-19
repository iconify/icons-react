import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vaowlwbvb.css';
import '../../css/z/zac5-7ixl.css';
import '../../css/v/vtw6x8oeg.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vaowlwbvb"/><path class="zac5-7ixl"/><path class="vtw6x8oeg"/></g>`,
		"fallback": "si-glyph:socket",
	});
}

export default Component;
