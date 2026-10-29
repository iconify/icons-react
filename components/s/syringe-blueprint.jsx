import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hc8q8z2_n.css';
import '../../css/d/dtuegcb8d.css';
import '../../css/k/kjq7-eber.css';
import '../../css/i/ie7dk7eoe.css';
import '../../css/x/xut5pihik.css';
import '../../css/f/fl3akxugr.css';
import '../../css/q/qgv8j_ekg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hc8q8z2_n wm-deco"/><path class="dtuegcb8d wm-deco"/><path class="kjq7-eber wm-deco"/><path class="ie7dk7eoe wm-k"/><path class="wm-a xut5pihik"/><path class="fl3akxugr wm-k"/><path class="qgv8j_ekg wm-a"/></g>`,
		"fallback": "withicons:syringe-blueprint",
	});
}

export default Component;
