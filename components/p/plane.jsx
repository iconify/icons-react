import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl10g45yc.css';
import '../../css/u/ujqryacmb.css';
import '../../css/i/iw4ze27lj.css';
import '../../css/b/bwh2cubxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kl10g45yc wm-k"/><path class="ujqryacmb wm-k"/><path class="iw4ze27lj wm-k"/><path class="bwh2cubxl wm-shine"/></g>`,
		"fallback": "withicons-anime:plane",
	});
}

export default Component;
