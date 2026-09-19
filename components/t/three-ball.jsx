import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmei6vbrs.css';
import '../../css/s/skzcihbsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mmei6vbrs"/><path class="skzcihbsi"/></g>`,
		"fallback": "si-glyph:three-ball",
	});
}

export default Component;
