import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oaz7rftep.css';
import '../../css/l/l8yf9ebsy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oaz7rftep"/><path class="l8yf9ebsy"/></g>`,
		"fallback": "si-glyph:train-rail",
	});
}

export default Component;
