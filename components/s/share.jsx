import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqzptdbsj.css';
import '../../css/i/i8s8nxb0p.css';
import '../../css/u/uv2ye9bti.css';
import '../../css/w/w83j6pb4m.css';
import '../../css/u/ucs62gbfv.css';
import '../../css/k/k2ahxt-2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jqzptdbsj wm-shadow"/><path class="i8s8nxb0p"/><path class="uv2ye9bti"/><path class="w83j6pb4m"/><path class="ucs62gbfv"/><path class="k2ahxt-2z"/></g>`,
		"fallback": "withicons-retro:share",
	});
}

export default Component;
