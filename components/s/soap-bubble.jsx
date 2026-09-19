import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qwug_cbnn.css';
import '../../css/k/kvff6pbwz.css';
import '../../css/v/v3c_x6flm.css';
import '../../css/n/n2qrtacam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><ellipse class="qwug_cbnn"/><path class="kvff6pbwz"/><circle class="v3c_x6flm"/><circle class="n2qrtacam"/></g>`,
		"fallback": "icon-park-outline:soap-bubble",
	});
}

export default Component;
