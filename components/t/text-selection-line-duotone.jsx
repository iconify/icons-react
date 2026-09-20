import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sn70fibvm.css';
import '../../css/o/oc256ggcz.css';
import '../../css/p/p5qqdijym.css';
import '../../css/x/xnvv0pb9e.css';
import '../../css/q/qoc2w7prb.css';
import '../../css/b/baqv_u95v.css';
import '../../css/e/eu306zbbi.css';
import '../../css/d/d4tgdxbtn.css';
import '../../css/m/mcjh43b7d.css';
import '../../css/s/sd1dy7bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sn70fibvm"/><path class="oc256ggcz"/><path class="p5qqdijym"/><path class="xnvv0pb9e"/><path class="qoc2w7prb"/><path class="baqv_u95v"/><path class="eu306zbbi"/><path class="d4tgdxbtn"/><path class="mcjh43b7d"/><path class="sd1dy7bce"/></g>`,
		"fallback": "solar:text-selection-line-duotone",
	});
}

export default Component;
