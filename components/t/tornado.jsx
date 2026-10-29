import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jg2ux6bjq.css';
import '../../css/g/gm_ls9i_l.css';
import '../../css/p/p_h-gibxa.css';
import '../../css/e/ebp1lyblv.css';
import '../../css/g/gg836pbwc.css';
import '../../css/k/k94_x4b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jg2ux6bjq wm-k"/><path class="gm_ls9i_l wm-k"/><path class="p_h-gibxa wm-k"/><path class="ebp1lyblv wm-a"/><path class="gg836pbwc wm-a"/><path class="k94_x4b2o wm-a"/></g>`,
		"fallback": "withicons-anime:tornado",
	});
}

export default Component;
