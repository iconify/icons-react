import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2sr9ggnb.css';
import '../../css/w/w_e99hbee.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k2sr9ggnb"/><path class="w_e99hbee"/></g>`,
		"fallback": "si-glyph:microscope",
	});
}

export default Component;
