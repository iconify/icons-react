import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbvx8-9op.css';
import '../../css/w/wdve1s0yd.css';
import '../../css/t/ta7_a93uk.css';
import '../../css/e/eoh5b_aej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbvx8-9op"/><path class="wdve1s0yd"/><path class="ta7_a93uk"/><path class="eoh5b_aej"/></g>`,
		"fallback": "icon-park:mail-download",
	});
}

export default Component;
