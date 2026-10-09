import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bux89r-yl.css';
import '../../css/m/mhz_qubgr.css';
import '../../css/b/bt7jfqbbp.css';
import '../../css/s/s4-izgb7s.css';
import '../../css/j/j9_bbbf9o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bux89r-yl"/><path class="mhz_qubgr"/><path class="bt7jfqbbp"/><path class="s4-izgb7s"/><path class="j9_bbbf9o"/>`,
		"fallback": "energy-icons:pulley-20-bold",
	});
}

export default Component;
