import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uyhjy_qbv.css';
import '../../css/l/lkpx07bzf.css';
import '../../css/u/uq-a8tbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uyhjy_qbv"/><path class="lkpx07bzf wm-k"/><path class="uq-a8tbkj wm-a"/></g>`,
		"fallback": "withicons:vault-sketch",
	});
}

export default Component;
