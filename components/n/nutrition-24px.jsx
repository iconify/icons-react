import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exlcxc65p.css';
import '../../css/y/yd_z_xzbl.css';
import '../../css/d/dxy15jbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="exlcxc65p"/><path class="yd_z_xzbl"/><path clip-rule="evenodd" class="dxy15jbvi"/></g>`,
		"fallback": "healthicons:nutrition-24px",
	});
}

export default Component;
