import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e6gga2tnl.css';
import '../../css/l/lqaiclbym.css';
import '../../css/e/et01vibno.css';
import '../../css/a/ae3oqxhnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e6gga2tnl wm-s"/><path class="lqaiclbym wm-k"/><path class="et01vibno wm-a"/><path class="ae3oqxhnu wm-s"/></g>`,
		"fallback": "withicons:remote-control-sketch",
	});
}

export default Component;
