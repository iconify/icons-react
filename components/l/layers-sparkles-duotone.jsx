import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bdb3ib3ln.css';
import '../../css/j/jxpp_iy-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bdb3ib3ln secondary"/><path class="jxpp_iy-r primary"/></g>`,
		"fallback": "iconaut:layers-sparkles-duotone",
	});
}

export default Component;
