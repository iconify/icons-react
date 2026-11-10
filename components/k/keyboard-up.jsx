import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8j_g755s.css';
import '../../css/u/uy51prbbu.css';
import '../../css/x/x5gyftlbq.css';
import '../../css/t/ttc_v_kjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8j_g755s"/><path class="uy51prbbu"/><path class="x5gyftlbq"/><path class="ttc_v_kjv"/></g>`,
		"fallback": "andrsrxn:keyboard-up",
	});
}

export default Component;
