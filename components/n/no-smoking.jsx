import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjma1yhgw.css';
import '../../css/e/exg5t-bvs.css';
import '../../css/y/yu54b04_b.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/qzb38lbzx.css';
import '../../css/j/jmbdu6lwh.css';
import '../../css/j/jmza3plhf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yjma1yhgw"/><path class="exg5t-bvs"/><path class="yu54b04_b"/><path class="yi3jdwbhm"/><g class="rpvb-o6bq"><path class="qzb38lbzx"/><circle class="jmbdu6lwh"/><path class="jmza3plhf"/></g>`,
		"fallback": "openmoji:no-smoking",
	});
}

export default Component;
