import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/t/ti-r20tkm.css';
import '../../css/h/hp0qij7wl.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/tsqpl9bcs.css';
import '../../css/p/pudj42bzy.css';
import '../../css/v/vx4v0_b3y.css';
import '../../css/q/qjtn_dbax.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><path class="ti-r20tkm"/><circle class="hp0qij7wl"/><g class="brzn_0bpr"><circle class="tsqpl9bcs"/><path class="pudj42bzy"/><path class="vx4v0_b3y"/><path class="qjtn_dbax"/></g>`,
		"fallback": "openmoji:mens-room",
	});
}

export default Component;
