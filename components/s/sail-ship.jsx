import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f2a5kofpk.css';
import '../../css/h/hnwief6-h.css';
import '../../css/m/my7aiubwm.css';
import '../../css/d/dg7n-8n_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="f2a5kofpk"/><path class="hnwief6-h"/><path class="my7aiubwm"/><path class="dg7n-8n_h"/></g>`,
		"fallback": "streamline-plump-color:sail-ship",
	});
}

export default Component;
