import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij21p9v3e.css';
import '../../css/c/c0ve_kbdw.css';
import '../../css/w/ws114_28t.css';
import '../../css/h/hylq48n6o.css';
import '../../css/l/lu3g2pb8o.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij21p9v3e"/><path class="c0ve_kbdw"/><path class="ws114_28t"/><circle class="hylq48n6o"/><path class="lu3g2pb8o"/></g>`,
		"fallback": "cif:kp",
	});
}

export default Component;
