import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ka5pt8bhv.css';
import '../../css/n/nfbfp3s5x.css';
import '../../css/h/hj_z2vbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ka5pt8bhv"/><path class="nfbfp3s5x"/><path clip-rule="evenodd" class="hj_z2vbmb"/></g>`,
		"fallback": "healthicons:low-income-level-outline-24px",
	});
}

export default Component;
