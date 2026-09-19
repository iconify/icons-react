import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/x/xkltt4jvh.css';
import '../../css/p/pde-jra6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ihrkb6bvf"/><rect class="c12_yhz0x"/><path class="xkltt4jvh"/><path class="pde-jra6z"/></g>`,
		"fallback": "icon-park:intersect-selection",
	});
}

export default Component;
