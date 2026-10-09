import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfzstzcwv.css';
import '../../css/o/o5ch5cb7c.css';
import '../../css/i/iw_u_sboj.css';
import '../../css/w/wuh-iacpi.css';
import '../../css/n/n-qy1k_rb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfzstzcwv"/><path class="o5ch5cb7c"/><path class="iw_u_sboj"/><path class="wuh-iacpi"/><path class="n-qy1k_rb"/>`,
		"fallback": "energy-icons:solar-panel-check-48-bold",
	});
}

export default Component;
