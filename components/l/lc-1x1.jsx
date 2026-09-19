import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dmv_memyb.css';
import '../../css/l/ly_xorbhf.css';
import '../../css/g/g-tbc_bos.css';
import '../../css/i/i_ci1z0yz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dmv_memyb"/><path class="ly_xorbhf"/><path class="g-tbc_bos"/><path class="i_ci1z0yz"/></g>`,
		"fallback": "flag:lc-1x1",
	});
}

export default Component;
