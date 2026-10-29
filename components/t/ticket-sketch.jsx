import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rbpy15bdk.css';
import '../../css/u/uvsyy_17f.css';
import '../../css/q/qc8g0bcwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rbpy15bdk"/><path class="uvsyy_17f wm-k"/><path class="qc8g0bcwg wm-a"/></g>`,
		"fallback": "withicons:ticket-sketch",
	});
}

export default Component;
