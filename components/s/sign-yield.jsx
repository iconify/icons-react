import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz0rp_ekf.css';
import '../../css/p/pf1_oxqio.css';
import '../../css/l/lfesz3put.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wz0rp_ekf"/><path class="pf1_oxqio"/><path class="lfesz3put"/></g>`,
		"fallback": "bi:sign-yield",
	});
}

export default Component;
