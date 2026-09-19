import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o1_3dvb8s.css';
import '../../css/t/t8dy76v2z.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o1_3dvb8s"/><path class="t8dy76v2z"/></g>`,
		"fallback": "si-glyph:time-reload",
	});
}

export default Component;
