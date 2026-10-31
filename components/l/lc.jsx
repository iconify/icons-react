import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5717g0rr.css';
import '../../css/p/p-h88lb3y.css';
import '../../css/p/pflnjityd.css';
import '../../css/b/b1pdv3b5d.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5717g0rr"/><path class="p-h88lb3y"/><path class="pflnjityd"/><path class="b1pdv3b5d"/></g>`,
		"fallback": "cif:lc",
	});
}

export default Component;
