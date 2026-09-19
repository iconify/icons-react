import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vplktbc-t.css';
import '../../css/y/y0i8unb4p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vplktbc-t"/><path class="y0i8unb4p"/></g>`,
		"fallback": "si-glyph:pin-location",
	});
}

export default Component;
