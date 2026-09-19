import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1dlfbb5m.css';
import '../../css/i/iy7wambnn.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v1dlfbb5m"/><path class="iy7wambnn"/></g>`,
		"fallback": "si-glyph:triangle-double-arrow-up",
	});
}

export default Component;
