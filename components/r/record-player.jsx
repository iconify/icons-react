import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azhej1d0k.css';
import '../../css/q/qhlububhx.css';
import '../../css/j/j8qx_nxnc.css';
import '../../css/b/bpz45z7pg.css';
import '../../css/t/tnyb7g49u.css';
import '../../css/s/stors8b0m.css';
import '../../css/p/pehg1bcwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="azhej1d0k"/><path class="qhlububhx"/><circle class="j8qx_nxnc"/><circle class="bpz45z7pg"/><path class="tnyb7g49u"/><path class="stors8b0m"/><path class="pehg1bcwr"/></g>`,
		"fallback": "icon-park:record-player",
	});
}

export default Component;
