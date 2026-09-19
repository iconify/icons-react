import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/c/cz7j3e4wj.css';
import '../../css/c/cnmqsablm.css';
import '../../css/l/lcr-0gr_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="wzzwdrbyq"/><path class="cz7j3e4wj"/><path class="cnmqsablm"/><path class="lcr-0gr_n"/></g>`,
		"fallback": "icon-park:oven-tray",
	});
}

export default Component;
