import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p5qqdijym.css';
import '../../css/x/xnvv0pb9e.css';
import '../../css/u/uqdxll9yb.css';
import '../../css/n/nborjbb0w.css';
import '../../css/q/qoc2w7prb.css';
import '../../css/q/qwahrfbri.css';
import '../../css/j/jpukyobyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p5qqdijym"/><path class="xnvv0pb9e"/><path class="uqdxll9yb"/><path class="nborjbb0w"/><path class="qoc2w7prb"/><path class="qwahrfbri"/><path class="jpukyobyo"/></g>`,
		"fallback": "solar:transmission-line-duotone",
	});
}

export default Component;
