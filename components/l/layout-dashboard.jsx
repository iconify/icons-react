import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ll1ruccim.css';
import '../../css/m/mrw-xacbx.css';
import '../../css/y/y6vj5sbxa.css';
import '../../css/u/ux3qxtb-e.css';
import '../../css/f/flc-68brc.css';
import '../../css/g/gugnaub-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ll1ruccim wm-k"/><path class="mrw-xacbx wm-k"/><path class="wm-shadow y6vj5sbxa"/><path class="ux3qxtb-e wm-shine"/><path class="flc-68brc wm-shine"/><path class="gugnaub-b wm-shine"/></g>`,
		"fallback": "withicons-valentine:layout-dashboard",
	});
}

export default Component;
