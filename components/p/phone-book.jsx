import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ei_5v2bht.css';
import '../../css/v/v-f-h7e7h.css';
import '../../css/s/s4c8q3bzj.css';
import '../../css/y/yb2scj8-e.css';
import '../../css/v/vplxblbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ei_5v2bht"/><path class="v-f-h7e7h"/><path class="s4c8q3bzj"/><path class="yb2scj8-e"/><path class="vplxblbgb"/></g>`,
		"fallback": "streamline-freehand:phone-book",
	});
}

export default Component;
