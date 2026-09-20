import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzd06b-3d.css';
import '../../css/e/erq4sqghc.css';
import '../../css/o/onn90jb9j.css';
import '../../css/f/f2i7g9b1n.css';
import '../../css/s/s_gtqnwjr.css';
import '../../css/q/qbx_x9bdk.css';
import '../../css/p/pamt8wm4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kzd06b-3d"/><path class="erq4sqghc"/><path class="onn90jb9j"/><path class="f2i7g9b1n"/><path class="s_gtqnwjr"/><path class="qbx_x9bdk"/><path class="pamt8wm4n"/></g>`,
		"fallback": "solar:tornado-linear",
	});
}

export default Component;
