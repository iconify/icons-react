import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zk0gytqrc.css';
import '../../css/u/uv12pgbfg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPsychologyNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="zk0gytqrc"/><path class="uv12pgbfg"/></g><defs><clipPath id="healthiconsPsychologyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:psychology-negative",
	});
}

export default Component;
