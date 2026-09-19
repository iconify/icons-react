import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgdslvb_p.css';
import '../../css/q/qv7d25b0i.css';
import '../../css/c/cym6v7rqr.css';
import '../../css/t/t0bcbybdf.css';
import '../../css/j/j589m8jck.css';
import '../../css/m/mjn73rb1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgdslvb_p"/><path class="qv7d25b0i"/><path class="cym6v7rqr"/><path class="t0bcbybdf"/><path class="j589m8jck"/><path class="mjn73rb1w"/></g>`,
		"fallback": "icon-park:strongbox",
	});
}

export default Component;
