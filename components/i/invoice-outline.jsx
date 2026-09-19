import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k84t0ebpb.css';
import '../../css/u/un_j6acnf.css';
import '../../css/p/padmk1hmn.css';
import '../../css/w/wni6cpb8g.css';
import '../../css/q/q65zcy66p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="k84t0ebpb"/><path class="un_j6acnf"/><circle class="padmk1hmn"/><circle class="wni6cpb8g"/><path class="q65zcy66p"/></g>`,
		"fallback": "bitcoin-icons:invoice-outline",
	});
}

export default Component;
