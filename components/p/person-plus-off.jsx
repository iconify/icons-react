import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xn4903-ui.css';
import '../../css/w/w7m3uccqr.css';
import '../../css/w/wl50mf2jv.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="xn4903-ui"/><path class="w7m3uccqr"/><path class="wl50mf2jv"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:person-plus-off",
	});
}

export default Component;
