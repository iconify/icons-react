import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxljwu_4d.css';
import '../../css/q/qeg0a5lgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxljwu_4d"/><path class="qeg0a5lgs"/></g>`,
		"fallback": "streamline-flex-color:tidal-wave",
	});
}

export default Component;
