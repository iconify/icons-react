import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/apm8-du2p.css';
import '../../css/l/l8-wj2b7a.css';
import '../../css/u/uvhw23bgc.css';
import '../../css/q/q_e7l7bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="apm8-du2p wm-shadow"/><path class="l8-wj2b7a wm-shadow"/><path class="uvhw23bgc"/><path class="q_e7l7bej"/></g>`,
		"fallback": "withicons-brutal:mail-open",
	});
}

export default Component;
