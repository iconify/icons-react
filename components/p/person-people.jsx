import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ou141mbhi.css';
import '../../css/l/l3_54nmha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ou141mbhi"/><path class="l3_54nmha"/></g>`,
		"fallback": "si-glyph:person-people",
	});
}

export default Component;
