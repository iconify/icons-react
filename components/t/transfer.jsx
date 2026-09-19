import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxs1s4oab.css';
import '../../css/o/oes74zpfc.css';
import '../../css/m/mi9qcgc5h.css';
import '../../css/r/rk-rw9bqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pxs1s4oab"/><path class="oes74zpfc"/><circle class="mi9qcgc5h"/><circle class="rk-rw9bqk"/></g>`,
		"fallback": "icon-park-outline:transfer",
	});
}

export default Component;
