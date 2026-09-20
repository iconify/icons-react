import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l036ii7qq.css';
import '../../css/r/ronv3mqpy.css';
import '../../css/u/uwcpg_b_h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x_k9ocb8k.css';
import '../../css/v/vuh-3acvu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l036ii7qq"/><path class="ronv3mqpy"/><path class="uwcpg_b_h"/><g class="ij2x_72vy"><path class="x_k9ocb8k"/><path class="vuh-3acvu"/></g>`,
		"fallback": "openmoji:snow-capped-mountain",
	});
}

export default Component;
