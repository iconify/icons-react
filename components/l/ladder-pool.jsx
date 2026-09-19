import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mjyefkbat.css';
import '../../css/m/m9243w-5j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mjyefkbat"/><path class="m9243w-5j"/></g>`,
		"fallback": "si-glyph:ladder-pool",
	});
}

export default Component;
