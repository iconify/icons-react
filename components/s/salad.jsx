import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wrtm70bbq.css';
import '../../css/q/qwe8aacte.css';
import '../../css/x/xz78nzdfe.css';
import '../../css/h/hdjxu8_dc.css';
import '../../css/s/s4wb4bc-c.css';
import '../../css/m/m1l-a3b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wrtm70bbq"/><path class="qwe8aacte"/><path class="xz78nzdfe"/><path class="hdjxu8_dc"/><path class="s4wb4bc-c"/><path class="m1l-a3b3n"/></g>`,
		"fallback": "withicons-retro:salad",
	});
}

export default Component;
