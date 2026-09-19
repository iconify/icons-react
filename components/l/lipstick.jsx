import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5g2jfvyv.css';
import '../../css/q/q_md8kb1j.css';
import '../../css/v/v9se4bb_s.css';
import '../../css/w/w_s4zabes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="m5g2jfvyv"/><rect class="q_md8kb1j"/><path class="v9se4bb_s"/><path class="w_s4zabes"/></g>`,
		"fallback": "icon-park:lipstick",
	});
}

export default Component;
