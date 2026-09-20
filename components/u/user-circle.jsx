import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3b-n7bhd.css';
import '../../css/p/p6_drfbwo.css';
import '../../css/y/y36269bov.css';
import '../../css/d/d_hcl2-7a.css';
import '../../css/w/w6nyof_sy.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="p3b-n7bhd"><circle class="p6_drfbwo"/><path class="y36269bov"/><path class="d_hcl2-7a"/><path class="w6nyof_sy"/></g>`,
		"fallback": "system-uicons:user-circle",
	});
}

export default Component;
