import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ngufe1b_r.css';
import '../../css/o/oaudb_mqv.css';
import '../../css/s/s7rkgo06q.css';
import '../../css/a/aopeiubkt.css';
import '../../css/q/q_splzqfy.css';
import '../../css/v/vj_ijob-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ngufe1b_r"/><path class="oaudb_mqv"/><path class="s7rkgo06q"/><path class="aopeiubkt"/><path class="q_splzqfy"/><path class="vj_ijob-i"/></g>`,
		"fallback": "matita:shield-exclamation-point",
	});
}

export default Component;
