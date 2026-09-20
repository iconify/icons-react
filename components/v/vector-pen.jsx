import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duel6bclb.css';
import '../../css/q/qwmzgxnla.css';
import '../../css/r/r-tyn1bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="duel6bclb"/><path class="qwmzgxnla"/><path class="r-tyn1bxn"/></g>`,
		"fallback": "streamline-cyber-color:vector-pen",
	});
}

export default Component;
