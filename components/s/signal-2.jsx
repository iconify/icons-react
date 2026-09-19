import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w1hsn6t8r.css';
import '../../css/n/nhvaaib1t.css';
import '../../css/r/rmxvjqpqd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w1hsn6t8r"/><path class="nhvaaib1t"/><path class="rmxvjqpqd"/></g>`,
		"fallback": "si-glyph:signal-2",
	});
}

export default Component;
