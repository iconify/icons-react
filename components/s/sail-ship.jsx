import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puwsyacrn.css';
import '../../css/s/sjo379-6q.css';
import '../../css/q/q-vb2ubei.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puwsyacrn"/><path class="sjo379-6q"/><path class="q-vb2ubei"/></g>`,
		"fallback": "streamline-color:sail-ship",
	});
}

export default Component;
