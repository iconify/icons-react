import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n2fy7q_sa.css';
import '../../css/y/yv9q2dliw.css';
import '../../css/e/ez43wyykp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n2fy7q_sa"/><path class="yv9q2dliw"/><path class="ez43wyykp"/></g>`,
		"fallback": "ix:monitoring-add",
	});
}

export default Component;
