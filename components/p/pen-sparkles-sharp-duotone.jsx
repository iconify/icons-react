import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jef8rhbsn.css';
import '../../css/b/bu7no646v.css';
import '../../css/c/c_xk-lr_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jef8rhbsn"/><path class="bu7no646v"/><path class="c_xk-lr_n"/></g>`,
		"fallback": "keyline-icons:pen-sparkles-sharp-duotone",
	});
}

export default Component;
