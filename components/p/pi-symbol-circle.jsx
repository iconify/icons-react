import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/j/jtlouza2l.css';
import '../../css/n/nxxv_1b1r.css';
import '../../css/w/wn9x-45yz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="jtlouza2l"/><path class="nxxv_1b1r"/><path class="wn9x-45yz"/></g>`,
		"fallback": "streamline-color:pi-symbol-circle",
	});
}

export default Component;
