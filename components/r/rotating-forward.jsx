import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tmnzncb-z.css';
import '../../css/j/jkm_m-thm.css';
import '../../css/d/dzx1e0bkm.css';
import '../../css/q/qschp8bbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tmnzncb-z"/><path class="jkm_m-thm"/><path class="dzx1e0bkm"/><path class="qschp8bbv"/></g>`,
		"fallback": "icon-park:rotating-forward",
	});
}

export default Component;
