import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxv5-ybvj.css';
import '../../css/d/dy2pj252l.css';
import '../../css/u/uc3_jjxqq.css';
import '../../css/u/u_ontkbwd.css';
import '../../css/y/yxiytebqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kxv5-ybvj wm-k"/><path class="dy2pj252l wm-k"/><path class="uc3_jjxqq wm-k"/><path class="u_ontkbwd wm-shine"/><path class="wm-k yxiytebqh"/></g>`,
		"fallback": "withicons-anime:jalebi",
	});
}

export default Component;
