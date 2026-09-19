import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/ze1uabcpt.css';
import '../../css/k/ks-fvnbsn.css';
import '../../css/w/wg8r5cc7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ze1uabcpt"/><path class="ks-fvnbsn"/><path class="wg8r5cc7s"/></g>`,
		"fallback": "icon-park:screen-rotation",
	});
}

export default Component;
