import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vxzkcsb0e.css';
import '../../css/k/k9x2z2blo.css';
import '../../css/g/g5_d_5y8o.css';
import '../../css/w/w21ocjbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vxzkcsb0e"/><path class="k9x2z2blo"/><path class="g5_d_5y8o"/><path class="w21ocjbww"/></g>`,
		"fallback": "icon-park:move",
	});
}

export default Component;
