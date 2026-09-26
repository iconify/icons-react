import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/poywaoygi.css';
import '../../css/r/ry2qzlfsr.css';
import '../../css/g/g4hvem0_y.css';
import '../../css/e/eccn1rr2t.css';
import '../../css/q/qx63tabzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="poywaoygi"/><path class="ry2qzlfsr"/></g><path class="g4hvem0_y"/><path class="eccn1rr2t"/><path class="qx63tabzz"/></g>`,
		"fallback": "solar:pills-3-bold-duotone",
	});
}

export default Component;
