import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wt0aips9s.css';
import '../../css/b/bm-lo_bnm.css';
import '../../css/m/m_gxpcbfh.css';
import '../../css/h/hpy0y4b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wt0aips9s"/><path class="bm-lo_bnm wm-deco"/><path class="m_gxpcbfh wm-deco"/><path class="hpy0y4b9v wm-k"/></g>`,
		"fallback": "withicons:puzzle-piece-blueprint",
	});
}

export default Component;
