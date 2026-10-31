import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/j/jvvg8mbwr.css';
import '../../css/x/xes4ntb1t.css';
import '../../css/c/ciawucboq.css';
import '../../css/q/q54_dqgic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="jvvg8mbwr"/><path class="xes4ntb1t"/><path class="ciawucboq"/><path class="q54_dqgic"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-rotate-pop",
	});
}

export default Component;
