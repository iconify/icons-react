import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sn70fibvm.css';
import '../../css/o/oc256ggcz.css';
import '../../css/p/p5qqdijym.css';
import '../../css/x/xnvv0pb9e.css';
import '../../css/q/qoc2w7prb.css';
import '../../css/b/baqv_u95v.css';
import '../../css/o/o9kntxagx.css';
import '../../css/x/xnwp-xx6w.css';
import '../../css/u/u9onkhwwo.css';
import '../../css/e/e69g47h7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sn70fibvm"/><path class="oc256ggcz"/><path class="p5qqdijym"/><path class="xnvv0pb9e"/><path class="qoc2w7prb"/><path class="baqv_u95v"/><path class="o9kntxagx"/><path class="xnwp-xx6w"/><path class="u9onkhwwo"/><path class="e69g47h7j"/></g>`,
		"fallback": "solar:text-selection-linear",
	});
}

export default Component;
