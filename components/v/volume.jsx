import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfuzh5bsz.css';
import '../../css/r/rmgz1x_wv.css';
import '../../css/y/y9em5zpwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sfuzh5bsz"/><path class="rmgz1x_wv"/><path clip-rule="evenodd" class="y9em5zpwc"/></g>`,
		"fallback": "gg:volume",
	});
}

export default Component;
