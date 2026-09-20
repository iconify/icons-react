import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mznr8bc4b.css';
import '../../css/y/yrkhz5ymg.css';
import '../../css/m/mtpmq_-6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mznr8bc4b"/><path class="yrkhz5ymg"/><path class="mtpmq_-6n"/></g>`,
		"fallback": "streamline-cyber-color:photocopy-machine",
	});
}

export default Component;
