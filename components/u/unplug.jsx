import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i_aqwmb_s.css';
import '../../css/k/kcbcznytb.css';
import '../../css/v/vt5jmmcqg.css';
import '../../css/h/h7bpecczy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i_aqwmb_s wm-k"/><path class="kcbcznytb"/><path class="vt5jmmcqg"/><path class="h7bpecczy wm-s"/></g>`,
		"fallback": "withicons-bauhaus:unplug",
	});
}

export default Component;
