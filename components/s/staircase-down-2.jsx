import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmz20acxw.css';
import '../../css/o/owr337brf.css';
import '../../css/m/m8_c1sb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fmz20acxw"/><path class="owr337brf"/><path class="m8_c1sb4n"/></g>`,
		"fallback": "streamline-cyber-color:staircase-down-2",
	});
}

export default Component;
