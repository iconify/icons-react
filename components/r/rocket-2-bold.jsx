import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whvaa_bdm.css';
import '../../css/y/yp--lsbio.css';
import '../../css/d/d_3_miv7p.css';
import '../../css/e/ed_lewb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="whvaa_bdm"/><path class="yp--lsbio"/><path class="d_3_miv7p"/><path clip-rule="evenodd" class="ed_lewb2r"/></g>`,
		"fallback": "solar:rocket-2-bold",
	});
}

export default Component;
