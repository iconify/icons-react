import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp0erdbtt.css';
import '../../css/p/p2xgsmn3m.css';
import '../../css/p/pv_xh9x_m.css';
import '../../css/a/avxctlrqg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp0erdbtt"/><path class="p2xgsmn3m"/><path class="pv_xh9x_m"/><path class="avxctlrqg"/></g>`,
		"fallback": "streamline-color:layers-2",
	});
}

export default Component;
