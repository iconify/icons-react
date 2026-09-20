import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usl55m1mq.css';
import '../../css/m/m24zplbff.css';
import '../../css/g/g7_albbtb.css';
import '../../css/d/dipzmp6lv.css';
import '../../css/b/bsk8xpu5g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usl55m1mq"/><path class="m24zplbff"/><circle class="g7_albbtb"/><path class="dipzmp6lv"/><path class="bsk8xpu5g"/>`,
		"fallback": "openmoji:last-quarter-moon-face",
	});
}

export default Component;
