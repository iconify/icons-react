import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2pu5bcyu.css';
import '../../css/m/mxcb4db5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k2pu5bcyu"/><path class="mxcb4db5o"/></g>`,
		"fallback": "si-glyph:pin-location-map",
	});
}

export default Component;
