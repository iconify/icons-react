import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pk76d8bqv.css';
import '../../css/b/b79z_acdm.css';
import '../../css/s/soh-f4tar.css';
import '../../css/e/e6rzp-bqb.css';
import '../../css/r/rh8fn_wwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pk76d8bqv"/><path class="b79z_acdm"/><path class="soh-f4tar"/><path class="e6rzp-bqb"/><path clip-rule="evenodd" class="rh8fn_wwa"/></g>`,
		"fallback": "solar:notebook-bookmark-outline",
	});
}

export default Component;
