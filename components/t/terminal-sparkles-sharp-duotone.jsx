import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lb1jov5wm.css';
import '../../css/k/koo-sesdl.css';
import '../../css/q/q4td3mb4p.css';
import '../../css/r/rhu4n0brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lb1jov5wm"/><path class="koo-sesdl"/><path class="q4td3mb4p"/><path class="rhu4n0brl"/></g>`,
		"fallback": "keyline-icons:terminal-sparkles-sharp-duotone",
	});
}

export default Component;
