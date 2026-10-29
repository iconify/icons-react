import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t776lnp7b.css';
import '../../css/z/z3rf84bgx.css';
import '../../css/k/k61rxtjwk.css';
import '../../css/h/h-pfqgbzl.css';
import '../../css/d/dc6exx_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t776lnp7b wm-k"/><path class="wm-a z3rf84bgx"/><path class="k61rxtjwk wm-shadow"/><path class="h-pfqgbzl wm-k"/><path class="dc6exx_io wm-a"/></g>`,
		"fallback": "withicons:underline-engrave",
	});
}

export default Component;
