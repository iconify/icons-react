import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qim-6bkwl.css';
import '../../css/q/qlvg9o9nq.css';
import '../../css/m/mcf4dis3x.css';
import '../../css/l/l_z-b8vui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qim-6bkwl"/><path class="qlvg9o9nq"/><path class="mcf4dis3x"/><path class="l_z-b8vui"/></g>`,
		"fallback": "solar:move-3d-linear",
	});
}

export default Component;
