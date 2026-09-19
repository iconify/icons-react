import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_i7ady4i.css';
import '../../css/d/d15ntbc-g.css';
import '../../css/g/gisoqpnwv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l_i7ady4i"/><path class="d15ntbc-g"/><path class="gisoqpnwv"/></g>`,
		"fallback": "si-glyph:timer",
	});
}

export default Component;
