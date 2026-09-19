import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fxdt5dbsr.css';
import '../../css/v/v-si7zbpn.css';
import '../../css/e/evmxz44ir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fxdt5dbsr"/><path class="v-si7zbpn"/><path class="evmxz44ir"/></g>`,
		"fallback": "healthicons:intestine-outline",
	});
}

export default Component;
