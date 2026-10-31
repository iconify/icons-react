import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b_x4_eukp.css';
import '../../css/n/ng8pc3bug.css';
import '../../css/n/nj91p_bpn.css';
import '../../css/n/no2ur_lbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b_x4_eukp wm-shadow"/><path class="ng8pc3bug"/><path class="nj91p_bpn"/><path class="no2ur_lbr"/></g>`,
		"fallback": "withicons-retro:rewind",
	});
}

export default Component;
