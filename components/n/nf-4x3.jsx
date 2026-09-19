import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xocoj9bjf.css';
import '../../css/o/o_uut_b7r.css';
import '../../css/e/emicf7wbv.css';
import '../../css/d/dmqy1en3m.css';
import '../../css/d/dqik646nn.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xocoj9bjf"/><path class="o_uut_b7r"/><path class="emicf7wbv"/><path class="dmqy1en3m"/><path class="dqik646nn"/></g>`,
		"fallback": "flag:nf-4x3",
	});
}

export default Component;
