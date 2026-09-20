import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/i/icf_5dbdd.css';
import '../../css/p/p0e1-ebbw.css';
import '../../css/v/v2ze4lb_y.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="icf_5dbdd"/><path clip-rule="evenodd" class="p0e1-ebbw"/><path clip-rule="evenodd" class="v2ze4lb_y"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:key-circle-off",
	});
}

export default Component;
