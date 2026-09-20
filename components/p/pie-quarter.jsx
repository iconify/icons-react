import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/xv2oc66nb.css';
import '../../css/u/u4pzetv0h.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="xv2oc66nb"/><path class="u4pzetv0h"/></g>`,
		"fallback": "system-uicons:pie-quarter",
	});
}

export default Component;
