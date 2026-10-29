import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wo259ue5g.css';
import '../../css/z/zb6mz35nb.css';
import '../../css/g/gv5fj_e6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wo259ue5g"/><path class="wm-a zb6mz35nb"/><path class="gv5fj_e6f"/></g>`,
		"fallback": "withicons:vr-headset-duo",
	});
}

export default Component;
