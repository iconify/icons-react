import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebopv2bhk.css';
import '../../css/c/cl4vir9-p.css';
import '../../css/k/kmct9_bvp.css';
import '../../css/x/x5a__9b3n.css';
import '../../css/d/dmxbhfbcc.css';
import '../../css/x/xvmscbb5e.css';

const viewBox = {"width":150,"height":104};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebopv2bhk"/><path class="cl4vir9-p"/><path class="kmct9_bvp"/><path class="x5a__9b3n"/><path class="dmxbhfbcc"/><path class="xvmscbb5e"/></g>`,
		"fallback": "thesvg-color:mercado-pago",
	});
}

export default Component;
