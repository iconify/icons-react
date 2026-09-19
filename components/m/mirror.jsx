import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wn6anzbuz.css';
import '../../css/w/w4wo01ekf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wn6anzbuz"/><path class="w4wo01ekf"/></g>`,
		"fallback": "icon-park:mirror",
	});
}

export default Component;
