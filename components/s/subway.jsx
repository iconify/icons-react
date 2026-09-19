import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vh6ngrh4m.css';
import '../../css/g/gq-wy5qtv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vh6ngrh4m"/><path class="gq-wy5qtv"/></g>`,
		"fallback": "si-glyph:subway",
	});
}

export default Component;
